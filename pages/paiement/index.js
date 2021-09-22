import Layout from "../../components/Layout";
import styles from "../../styles/AccountPage.module.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/CheckoutForm";
import Adresses from "../../components/Adresses";
import { useState } from "react";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe(process.env.STRIPE_PRIVATE_KEY);

export default function PaiementElement() {
  const [pageType, setPageType] = useState("adresses");
  const [currentAdress, setCurrentAdress] = useState({});

  const goToPayment = () => {
    if (currentAdress.id) {
      setPageType("payement");
      window.scrollTo(0, 0);
    } else {
      alert("Veuillez sélectionner une adresse de livraison");
    }
  };
  return (
    <Layout>
      <main className={styles.main}>
        <div style={{ width: "90%", margin: "0 auto" }}>
          {pageType == "adresses" && (
            <div>
              <h2 style={{ padding: "5vw 0 0 0" }}>Adresse de livraison</h2>
              <h3 style={{ textAlign: "center" }}>
                Ou souhaitez vous être livré ?
              </h3>
              <Adresses
                selectable
                currentAdress={currentAdress}
                setCurrentAdress={(adresse) => setCurrentAdress(adresse)}
              />
              <button onClick={goToPayment}>Passer à l&apos;étape suivante</button>
            </div>
          )}
          {pageType == "payement" && (
            <div>
              <h2>Paiement par carte</h2>
              <Elements stripe={promise}>
                <CheckoutForm adresse={currentAdress} />
              </Elements>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
