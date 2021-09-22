import styles from '../styles/Article.module.scss';
import Link from 'next/link';

export default function Article({
  price,
  addToCart,
  deleteToCart,
  image,
  quantity,
  deleteArticle,
  title,
  productId,
  value,
}) {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt="article"/>
      </div>
      <div className={styles.textContainer}>
        <Link href={`/boutique/${productId}`} passHref>
          <h3>{title}</h3>
        </Link>

        <p>{value}</p>
        <div className={styles.quantityWrapper}>
          <p>Quantité</p>
          <div className={styles.quantityHandler}>
            <p onClick={deleteToCart}>-</p>
            <p>{quantity}</p>
            <p onClick={addToCart}>+</p>
          </div>
        </div>
      </div>
      <div className={styles.handlerContainer}>
        <p className={styles.deleteTxt} onClick={deleteArticle}>
          Supprimer l&apos;article
        </p>
        {price.promoted ? (
          <div className={styles.promotedContainer}>
            <p className={styles.promotedPrice}>
              {price.promoted * quantity} €
            </p>
            <p className={styles.normalPrice}>{price.value * quantity} €</p>
          </div>
        ) : (
          <p>{price.value * quantity} €</p>
        )}
      </div>
    </div>
  );
}
