import React, { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { postDataToAPI } from "../utils/dataPoster";
import styles from "../styles/AccountPage.module.scss";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";

export default function CheckoutForm({ adresse }) {
  const total = typeof window !== "undefined" && localStorage.getItem("total");
  const user =
    (typeof window !== "undefined" &&
      localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user"))) ||
    undefined;

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isHuman, setIsHuman] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const cardStyle = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "#484848",
        fontWeight: 400,
        fontFamily: "Montserrat, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#484848",
        },
        "::placeholder": {
          color: "#989898",
        },
      },
      invalid: {
        iconColor: "#981414",
        color: "#000",
      },
    },
  };

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const cart =
      localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"));
    const total = localStorage.getItem("total");
    const codePromoText = localStorage.getItem("code");

    if (!total || !cart) {
      setError(`Paiement impossible. Reprocédez au paiement depuis le panier`);
      return;
    }
    postDataToAPI(
      "/commandes/checkPayment",
      { cart, total, codePromoText },
      async (response) => {
        const { secretClient } = response.data;
        const payload = await stripe.confirmCardPayment(secretClient, {
          payment_method: {
            type: "card",
            card: elements.getElement(CardNumberElement),
            billing_details: {
              name: adresse.nom + " " + adresse.prenom,
            },
          },
        });
        if (payload.error) {
          setError(
            `Paiement impossible. Impossible de créer la commande, ${error}`
          );
          setProcessing(false);
        }
        postDataToAPI(
          "/commandes/createMe",
          {
            cart,
            total,
            codePromoText,
            adresse,
            paymentId: payload.paymentIntent.id,
          },
          (res) => {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
            localStorage.removeItem("cart");
            localStorage.removeItem("code");
            localStorage.removeItem("total");
            router.replace(
              "/paiement/succeed?commandeId=" + res.data?.commandeId
            );
          },
          (error) => {
            console.log(error);
            setError(
              `Paiement impossible. Impossible de créer la commande, veuillez recommencer`
            );
            setProcessing(false);
          },
          {
            headers: {
              Authorization: "Bearer " + user.jwt,
            },
          }
        );
      },
      (error) => {
        setError("Paiement impossible. " + error.response?.data?.message);
        setProcessing(false);
        console.log(error);
      },
      {
        headers: {
          Authorization: "Bearer " + user.jwt,
        },
      }
    );
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <div className={styles.formRow}>
        <label>Numéro de carte</label>
        <CardNumberElement
          id="card-element"
          className={styles.cardElement}
          options={cardStyle}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formRow}>
        <label>Code de sécurité</label>
        <CardCvcElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formRow}>
        <label>Date d&apos;expiration</label>
        <CardExpiryElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
      </div>
      <div
        style={{ justifyContent: "center", display: "flex", marginTop: "4vw" }}
      >
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={() => setIsHuman(true)}
        />
      </div>

      <button
        disabled={processing || disabled || succeeded || !isHuman}
        id="submit"
      >
        {processing ? (
          <div className="spinner" id="spinner">
            {" "}
            En cours de paiement...
          </div>
        ) : (
          `Procéder au payement · ${total || 0} €`
        )}
      </button>
      {error && (
        <div className="card-error" role="alert">
          <p className={styles.notificationText}>{error}</p>
        </div>
      )}
      {succeeded && (
        <p className={styles.notificationText}>Paiement réussi !</p>
      )}
    </form>
  );
}
