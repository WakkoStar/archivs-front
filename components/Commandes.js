import styles from "../styles/CommandeElement.module.scss";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const statutParsed = {
  undefined: "Non défini",
  sended: "Expédié",
  received: "Reçu",
  paid: "Payé",
  refund: "Remboursé",
};

export default function Commande({
  id,
  created_at,
  cout_total,
  uuid,
  statut,
  adresse_livraison,
  produits_commande,
  cancelPayement,
}) {
  const { prenom, nom, telephone, voie, ville, code_postal, pays } =
    adresse_livraison;

  const date = new Date(Date.parse(created_at));

  return (
    <div className={styles.commandeContainer}>
      <h3>Commande N°{uuid}</h3>
      <p>
        Passée le{" "}
        {`${date.toLocaleDateString("fr-FR", options)} à ${date.getHours()}h${
          (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
        } `}
      </p>
      <p>Total : {cout_total} €</p>
      <p>
        Statut : <strong>{statutParsed[statut]}</strong>
      </p>
      <div className={styles.adresseWrapper}>
        <h3>Adresse</h3>
        <p>
          {prenom} {nom}
        </p>
        <p>{telephone}</p>
        <p>{voie}</p>
        <p>
          {code_postal} {ville}
        </p>
        <p>{pays}</p>
      </div>
      <div>
        <h3>Produits</h3>
        {produits_commande.map(({ id, title, price, value, quantity }) => (
          <div key={id} className={styles.productWrapper}>
            <h4>{title}</h4>
            <p>{value}</p>
            <p>{(price.promoted || price.value) * quantity} €</p>
            <p>{quantity} unité (s)</p>
          </div>
        ))}
      </div>
      {date.getTime() + 1 * 3600 * 1000 > Date.now() && statut != "refund" && (
        <button
          className={styles.secondButton}
          onClick={() => cancelPayement(id)}
        >
          Rembourser
        </button>
      )}
    </div>
  );
}
