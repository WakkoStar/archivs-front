import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import Product from "../components/Product";
import styles from "../styles/BoutiqueElement.module.scss";
import { BASE_URL, fetchDataFromAPI } from "../utils/dataFetcher";
import { useEffect, useState } from "react";

export default function BoutiqueElement({ product, seeAlsoProducts }) {
  const [previewUrl, setPreviewUrl] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [price, setPrice] = useState({ value: 0 });
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    setPreviewUrl(product.apercu.url);
    setSelectedProduct(
      product.type_de_produit ? product.type_de_produit[0] : null
    );
  }, [product.apercu.url, product.type_de_produit]);

  useEffect(() => {
    const setActivePrice = () => {
      if (selectedProduct == null) return setPrice({ value: 0 });

      if (selectedProduct.promotion && selectedProduct.promotion.actif) {
        setPrice({
          value: selectedProduct.prix,
          promoted: selectedProduct.promotion.prix,
        });
      } else {
        setPrice({ value: selectedProduct.prix });
      }
    };

    setActivePrice();
  }, [selectedProduct]);

  const addItemToCart = () => {
    setIsAddingToCart(true);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productCartIndex = cart.findIndex(
      ({ productTypeId, productId }) =>
        productTypeId == selectedProduct.id && productId == product.id
    );
    if (productCartIndex == -1) {
      cart = [
        ...cart,
        {
          productId: product.id,
          productTypeId: selectedProduct.id,
          quantity: 1,
        },
      ];
    } else {
      if (cart[productCartIndex].quantity >= selectedProduct.stock) {
        alert(
          "Le stock a été atteint ! Vous ne pouvez pas ajouter cet article davantage"
        );
        setIsAddingToCart(false);
        return;
      }
      cart[productCartIndex] = {
        ...cart[productCartIndex],
        quantity: cart[productCartIndex].quantity + 1,
      };
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setTimeout(() => setIsAddingToCart(false), 1000);
  };

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.displayerContainer}>
          <img src={`${BASE_URL}${previewUrl}`} alt={product.apercu.name} />
          <div className={styles.displays}>
            {product.gallerie.map(({ id, url, name }) => (
              <div key={id} onClick={() => setPreviewUrl(url)}>
                <img src={`${BASE_URL}${url}`} alt={name} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.mainInfosContainer}>
          <h2>{product.nom}</h2>
          {product.type_de_produit &&
            product.type_de_produit.some((el) => el.valeur) && (
              <>
                <p className={styles.sizeSelectorLabel}>
                  {product.caracteristique
                    ? `Veuillez sélectionnez ${product.caracteristique}`
                    : "Veuillez choisir"}
                </p>
                <div className={styles.sizeSelector}>
                  {product.type_de_produit.map(
                    ({ valeur, prix, promotion, id, stock }) => (
                      <div
                        key={id}
                        className={
                          selectedProduct && id == selectedProduct.id
                            ? styles.selected
                            : styles.notSelected
                        }
                        onClick={() =>
                          setSelectedProduct({
                            id,
                            prix,
                            promotion,
                            valeur,
                            stock,
                          })
                        }
                      >
                        <p>{valeur}</p>
                      </div>
                    )
                  )}
                </div>
              </>
            )}

          <button
            onClick={addItemToCart}
            disabled={isAddingToCart || !selectedProduct?.stock}
          >
            {isAddingToCart ? (
              <>
                <p>Ajout...</p>
              </>
            ) : (
              <>
                <p>Ajouter au panier</p>
                <p>·</p>
                {price.promoted ? (
                  <>
                    <p>{price.promoted}€</p>
                    <p className={styles.promotedValue}>{price.value}€</p>
                  </>
                ) : (
                  <p>{price.value}€</p>
                )}
              </>
            )}
          </button>
          <div
            className={
              selectedProduct?.stock > 0
                ? styles.detailsContainer
                : styles.detailsDangerContainer
            }
          >
            <p>
              {selectedProduct?.stock > 0 ? "En stock" : "Rupture de stock"}
            </p>
          </div>
        </div>
        <div className={styles.productInfoContainer}>
          <p className={styles.detailsText}>
            Référence article : {product.reference}
          </p>
          <h3>Description du produit</h3>
          <p>{product.description}</p>
        </div>
        <div className={styles.productsContainer}>
          <h2>Voir aussi</h2>
          <div className={styles.productsWrapper}>
            {seeAlsoProducts &&
              seeAlsoProducts.map(
                ({ id, nouveau, stock, apercu, type_de_produit, nom }) => (
                  <Product
                    id={id}
                    key={id}
                    data={{ nouveau, stock, type_de_produit }}
                    title={nom}
                    src={`${BASE_URL}${apercu.url}`}
                  />
                )
              )}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const products = await fetchDataFromAPI("/produits", []);

  return {
    paths: products.map(({ id }) => ({ params: { id: id.toString() } })),
    fallback: false,
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const initialState = {
    id: params.id,
    nom: "",
    description: "",
    stock: 0,
    nouveau: false,
    reference: "",
    type_de_produit: [],
    apercu: {
      url: "",
      name: "",
    },
    gallerie: [],
  };
  const product = await fetchDataFromAPI(
    `/produits/${params.id}`,
    initialState
  );

  const products = await fetchDataFromAPI(`/produits`, []);

  const taggedProducts = products.filter(
    ({ tags, id }) =>
      tags.some((tag) => product.tags.find((el) => el.texte == tag.texte)) &&
      id != product.id
  );
  return {
    props: { product, seeAlsoProducts: taggedProducts },
    revalidate: 60, 
  };
}
