import { useEffect, useState, useRef } from "react";
import styles from "../styles/AccountPage.module.scss";
import { fetchDataFromAPI } from "../utils/dataFetcher";
import { putDataToAPI } from "../utils/dataPoster";

export default function Adresses({
  selectable = false,
  setCurrentAdress = () => {},
  currentAdress,
}) {
  const form = useRef(null);
  const initialState = {
    prenom: "",
    nom: "",
    telephone: "",
    voie: "",
    ville: "",
    code_postal: "",
    pays: "",
    isNew: true,
  };
  const [adresses, setAdresses] = useState([]);
  const [selectedAdress, setSelectedAdress] = useState(initialState);
  const [openEditing, setOpenEditing] = useState(false);
  const user =
    (typeof window !== "undefined" &&
      localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user"))) ||
    {};

  useEffect(() => {
    const fetchData = async () => {
      if (!user) {
        return;
      }
      const userFetched = await fetchDataFromAPI(
        `/users/me`,
        {},
        {
          headers: {
            Authorization: "Bearer " + user.jwt,
          },
        }
      );

      setAdresses(userFetched.adresses);
    };

    fetchData();
  }, []);

  const selectAdress = (adresse) => {
    setOpenEditing(true);
    form.current.scrollIntoView(true);
    setSelectedAdress(adresse);
  };

  const putAdressToApi = (allAdresses) => {
    putDataToAPI(
      "/users-permissions/users/me",
      { adresses: allAdresses },
      {
        headers: {
          Authorization: "Bearer " + user.jwt,
        },
      },
      (response) => {
        setAdresses(response.data.adresses);
        setSelectedAdress(initialState);
      }
    );
  };

  const setAllAdresses = (e) => {
    e.preventDefault();
    let allAdresses = adresses || [];
    if (selectedAdress.isNew) {
      allAdresses = [...allAdresses, selectedAdress];
    } else {
      const index = allAdresses.findIndex(({ id }) => selectedAdress.id == id);
      allAdresses[index] = selectedAdress;
    }

    putAdressToApi(allAdresses);
    window.scrollTo(0, 0);
    setOpenEditing(false);
  };

  const deleteAdress = (selectedAdressId) => {
    let allAdresses = adresses.filter(({ id }) => selectedAdressId != id);
    putAdressToApi(allAdresses);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            selectAdress(initialState);
          }}
        >
          Créer une nouvelle adresse
        </button>
        {adresses?.length ? (
          adresses.map((adresse) => {
            const {
              prenom,
              nom,
              telephone,
              voie,
              ville,
              code_postal,
              pays,
              id,
            } = adresse;
            const selected = currentAdress?.id == id;
            return (
              <div
                className={selected ? styles.selectedAddress : styles.address}
                key={id}
              >
                <div className={styles.adressWrapper}>
                  <p>
                    {prenom} {nom}
                  </p>
                  <p>{telephone}</p>
                  <p>{voie}</p>
                  <p>{ville}</p>
                  <p>{code_postal}</p>
                  <p>{pays}</p>
                </div>
                <div className={styles.adressWrapper}>
                  <button
                    onClick={() =>
                      selectAdress({
                        ...adresse,
                        isNew: false,
                      })
                    }
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => deleteAdress(id)}
                    className={styles.secondButton}
                  >
                    ❌
                  </button>
                </div>
                {selectable && (
                  <button
                    onClick={() => setCurrentAdress(adresse)}
                    className={selected ? styles.selected : null}
                  >
                    {selected ? "Sélectionné" : "Sélectionner"}
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <div className={styles.address}>
            <h4>Aucune adresse trouvée</h4>
          </div>
        )}
      </div>
      <div className={styles.newAdressContainer} ref={form}>
        <div
          style={{
            overflow: "hidden",
            height: openEditing ? "100%" : 0,
          }}
        >
          <h2>
            {selectedAdress.isNew
              ? "Nouvelle adresse"
              : "Mise à jour d'adresse"}
          </h2>
          <form onSubmit={setAllAdresses}>
            <input
              required
              type="text"
              placeholder="Prénom"
              value={selectedAdress?.prenom}
              onChange={(e) =>
                setSelectedAdress({
                  ...selectedAdress,
                  prenom: e.target.value,
                })
              }
            />
            <input
              required
              type="text"
              placeholder="Nom"
              value={selectedAdress?.nom}
              onChange={(e) =>
                setSelectedAdress({ ...selectedAdress, nom: e.target.value })
              }
            />
            <input
              required
              type="tel"
              placeholder="Téléphone "
              value={selectedAdress?.telephone}
              onChange={(e) =>
                setSelectedAdress({
                  ...selectedAdress,
                  telephone: e.target.value,
                })
              }
            />
            <input
              required
              type="text"
              placeholder="Voie et complément d'adresse"
              value={selectedAdress?.voie}
              onChange={(e) =>
                setSelectedAdress({ ...selectedAdress, voie: e.target.value })
              }
            />
            <input
              required
              type="text"
              placeholder="Ville"
              value={selectedAdress?.ville}
              onChange={(e) =>
                setSelectedAdress({
                  ...selectedAdress,
                  ville: e.target.value,
                })
              }
            />
            <input
              required
              type="number"
              placeholder="Code postal"
              value={selectedAdress?.code_postal}
              onChange={(e) =>
                setSelectedAdress({
                  ...selectedAdress,
                  code_postal: e.target.value,
                })
              }
            />
            <input
              required
              type="text"
              placeholder="Pays"
              value={selectedAdress?.pays}
              onChange={(e) =>
                setSelectedAdress({ ...selectedAdress, pays: e.target.value })
              }
            />
            <button type="submit">
              {selectedAdress.isNew ? "Ajouter" : "Modifier"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
