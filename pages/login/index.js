import Layout from "../../components/Layout";
import Link from "next/link";
import styles from "../../styles/ContactPage.module.scss";
import { BASE_URL, fetchDataFromAPI } from "../../utils/dataFetcher";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { postDataToAPI } from "../../utils/dataPoster";
import { addContact } from "../../utils/sendGridRequest";

export default function LoginPage({}) {
  const router = useRouter();

  const destination = router.query && router.query.destination;

  const [inputShow, setInputShow] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [mail, setMail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [error, setError] = useState("");

  const setUser = (response) => {
    const user = response.data.user;
    const jwt = response.data.jwt;
    localStorage.setItem("user", JSON.stringify({ ...user, jwt }));
    router.replace(`/${destination || "mon-compte"}`);
  };

  const setAccount = async (isNewAccount) => {
    if (!mail || mail == "") {
      setError("Renseignez votre mail");
      return;
    }
    if (!password || password == "") {
      setError("Renseignez votre mot de passe");
      return;
    }
    if (isNewAccount) {
      if (
        !mail.match(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
        )
      ) {
        setError("Votre mail n'est pas valide");
        return;
      }

      if (password.length < 8) {
        setError("Mot de passe trop court");
        return;
      }

      if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)) {
        setError(
          "Votre mot de passe doit contenir au moins une majuscule, une minuscule et un nombre"
        );
        return;
      }

      const body = {
        username: mail,
        email: mail,
        password,
      };

      postDataToAPI(
        "/auth/local/register",
        body,
        (response) => {
          alert(
            "Votre compte a bien été créé, vous recevrez une confirmation par mail"
          );
          if (isSubscribed) addContact(mail);
          setUser(response);

          postDataToAPI(
            "/a-propos",
            {},
            () => {
              console.log("email sended to", mail);
            },
            () => {
              console.log(
                "Votre compte a bien été créée mais impossible de vous envyer un e-mail..."
              );
            },
            {
              headers: {
                Authorization: `Bearer ${response.data.jwt}`,
              },
            }
          );
        },
        (error) => {
          setError(error.response?.data?.message[0]?.messages[0]?.message);
        }
      );
    } else {
      const body = {
        identifier: mail,
        password,
      };

      postDataToAPI(
        "/auth/local",
        body,
        (response) => {
          setUser(response);
        },
        (error) => {
          setError(error.response?.data?.message[0]?.messages[0]?.message);
        }
      );
    }
  };

  return (
    <Layout>
      <main className={styles.main}>
        <h2>{isRegister ? "Enregistrement" : "Connexion"}</h2>
        <input
          type="email"
          placeholder="Votre mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type={inputShow ? "text" : "password"}
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label
          className={styles.showPassword}
          onClick={() => setInputShow(!inputShow)}
        >
          {inputShow ? "Cacher le mot de passe" : "Montrer le mot de passe"}
        </label>
        <p className={styles.errorMessage}>{error}</p>
        {isRegister ? (
          <>
            <div className={styles.newsletterContainer}>
              <input
                type="checkbox"
                onChange={(e) => setIsSubscribed(!isSubscribed)}
                checked={isSubscribed}
              />
              <p>S&apos;abonner à la newsletter</p>
            </div>

            <button onClick={() => setAccount(true)}>S&apos;enregistrer</button>
            <button
              className={styles.secondButton}
              onClick={() => setIsRegister(!isRegister)}
            >
              J&apos;ai déjà un compte
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setAccount(false)}>Se connecter</button>
            <button
              className={styles.secondButton}
              onClick={() => setIsRegister(!isRegister)}
            >
              Créer un compte
            </button>
          </>
        )}
        {isRegister ? (
          <p className={styles.acceptConditions}>
            J&apos;accepte que mes données soient exploitées conformément à la
            la déclaration de confidentialité dans le cadre de mon compte
            d&apos;utilisateur, de mes commandes et de mes autres utilisations
            du site www.jeremycapeau.fr
          </p>
        ) : (
          <Link href="/login/forgot-password">
            <a>J&apos;ai oublié mon mot de passe</a>
          </Link>
        )}
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  return { props: {} };
}
