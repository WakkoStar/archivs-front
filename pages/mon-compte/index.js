import Layout from "../../components/Layout";
import styles from "../../styles/AccountPage.module.scss";
import { fetchDataFromAPI } from "../../utils/dataFetcher";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Adresses from "../../components/Adresses";
import Commande from "../../components/Commandes";
import { postDataToAPI } from "../../utils/dataPoster";
export default function AccountPage({}) {
  const router = useRouter();
  const page = router?.query?.page || "adresses";
  const [commandes, setCommandes] = useState([]);

  const user =
    (typeof window !== "undefined" &&
      localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user"))) ||
    undefined;

  const disconnect = () => {
    localStorage.removeItem("user");
    router.replace("/");
  };

  const resetPassword = () => {
    const r = confirm("Voulez vous changer votre mot de passe ?");
    if (!r) {
      return;
    }
    postDataToAPI(
      "/auth/forgot-password",
      { email: user.email },
      () => {
        alert(
          "Votre mot de passe peut être réinitialisé. Un mail a été envoyé"
        );
        localStorage.removeItem("user");
        router.replace("/");
      },
      () => {
        alert("Impossible d'envoyer un mail...");
      }
    );
  };

  const deleteAccount = () => {
    const r = confirm("Voulez vous supprimer votre compte ?");
    if (!r) {
      return;
    }
    postDataToAPI(
      "/users-permissions/users/deleteMe",
      {},
      () => {
        alert("Votre compte est supprimé. Nous espérons vous revoir...");
        localStorage.removeItem("user");
        router.replace("/");
      },
      (e) => {
        console.log(e);
        alert("Impossible de supprimer le compte");
      },
      {
        headers: {
          Authorization: `Bearer ${user?.jwt}`,
        },
      }
    );
  };

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }

    const fetchData = async () => {
      const res = await fetchDataFromAPI("/commandes/me", [], {
        headers: {
          Authorization: `Bearer ${user?.jwt}`,
        },
      });
      setCommandes(res);
      if (res?.statusCode == 401) {
        localStorage.removeItem("user");
        router.replace("/login");
      }
    };

    fetchData();
  }, [router]);

  const cancelPayement = (id) => {
    const r = confirm("Voulez vous annuler votre commande ?");
    if (!r) {
      return;
    }
    postDataToAPI(
      "/commandes/cancel",
      { commandeId: id },
      () => {
        alert(
          "Votre commande a bien été annulé, vous avez reçu un accusé de récéption"
        );
      },
      () => {
        alert("Impossible d'annuler votre commande");
      },
      {
        headers: {
          Authorization: `Bearer ${user?.jwt}`,
        },
      }
    );
  };

  const Commandes = () =>
    commandes.length ? (
      commandes.map((commande) => (
        <Commande
          key={commande.id}
          {...commande}
          cancelPayement={cancelPayement}
        />
      ))
    ) : (
      <div>
        <h4 className={styles.notificationText}>Aucune commande passée</h4>
      </div>
    );

  return (
    <Layout>
      <main className={styles.main}>
        <h2>Mon compte</h2>
        <div className={styles.categoryContainer}>
          <ul>
            <li onClick={() => router.replace("/mon-compte?page=adresses")} className ={page == "adresses" ? styles.selected: undefined}>
              Carnet d&apos;adresses
            </li>
            <li onClick={() => router.replace("/mon-compte?page=commandes")} className ={page == "commandes" ? styles.selected: undefined}>
              Mes commandes
            </li>
            <li onClick={resetPassword}>Modifier mot de passe</li>
            <li onClick={disconnect}>Se déconnecter</li>
            <li onClick={deleteAccount}>Supprimer mon compte</li>
          </ul>
        </div>
        <div className={styles.container}>
          {page == "adresses" && <Adresses />}
          {page == "commandes" && <Commandes />}
        </div>
      </main>
    </Layout>
  );
}
