import Layout from "../../components/Layout";
import styles from "../../styles/PanierPage.module.scss";
import { fetchDataFromAPI, BASE_URL } from "../../utils/dataFetcher";
import Article from "../../components/Article";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PanierPage() {
  const getCart = () =>
    (typeof window !== "undefined" &&
      localStorage.getItem("cart") &&
      JSON.parse(localStorage.getItem("cart"))) ||
    [];

  const getCode = () =>
    typeof window !== "undefined" && localStorage.getItem("code");

  const addToCart = (id, subId) => {
    const productCartIndex = cart.findIndex(
      ({ productTypeId, productId }) =>
        productTypeId == subId && productId == id
    );

    if (productCartIndex == -1) {
      return;
    }

    const selectedProduct = products.find(
      ({ productId, productTypeId }) =>
        productId == id && productTypeId == subId
    );

    if (cart[productCartIndex].quantity >= selectedProduct.stock) {
      alert(
        "Le stock a été atteint ! Vous ne pouvez pas ajouter cet article davantage"
      );

      return;
    }

    cart[productCartIndex] = {
      ...cart[productCartIndex],
      quantity: cart[productCartIndex].quantity + 1,
    };

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(getCart());
  };

  const deleteToCart = (id, subId) => {
    const productCartIndex = cart.findIndex(
      ({ productTypeId, productId }) =>
        productTypeId == subId && productId == id
    );

    if (productCartIndex == -1) {
      return;
    }

    cart[productCartIndex] = {
      ...cart[productCartIndex],
      quantity: cart[productCartIndex].quantity - 1,
    };

    if (cart[productCartIndex].quantity <= 0) {
      deleteArticle(id, subId);
      return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(getCart());
  };

  const deleteArticle = (id, subId) => {
    const productCart = cart.find(
      ({ productTypeId, productId }) =>
        productTypeId == subId && productId == id
    );

    if (!productCart) {
      return;
    }

    const cartState = cart.filter(
      ({ productId, productTypeId }) =>
        productId != id || productTypeId != subId
    );
    localStorage.setItem("cart", JSON.stringify(cartState));
    setCart(getCart());
  };

  const goToPayment = () => {
    localStorage.setItem(
      "total",
      parseFloat(
        detailsPrice.subTotal + detailsPrice.delivery - detailsPrice.reduction
      )
        .toFixed(2)
        .toString()
    );

    const user =
      localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

    if (!user) {
      router.replace("/login?destination=paiement");
      return;
    }

    router.replace("/paiement");
  };

  const checkCodePromo = async () => {
    const res = await getValidCodePromo(codePromoText);

    if (!res) {
      return;
    }
    localStorage.setItem("code", res.code);
    setCodePromo(res.code);
    setCodePromoError("");
  };

  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [detailsPrice, setDetailsPrice] = useState({
    subTotal: 0,
    delivery: 0,
  });
  const [cart, setCart] = useState(() => getCart());
  const [codePromo, setCodePromo] = useState(() => getCode());
  const [codePromoText, setCodePromoText] = useState("");
  const [codePromoError, setCodePromoError] = useState("");

  const getValidCodePromo = useCallback(
    async (codePromoText) => {
      if (!codePromoText.length) {
        return null;
      }
      const count = cart.reduce((total, { quantity }) => {
        return (total += quantity);
      }, 0);

      const res = await fetchDataFromAPI(
        "/codes-promos/check/" + codePromoText,
        {}
      );

      if (!res.code) {
        setCodePromoError("Code promo non trouvé");
        return null;
      }
      if (Date.parse(res.valide) < Date.now()) {
        setCodePromoError("Ce code promo n'est plus valable, il a expiré");
        return null;
      }

      if (res.articles && res.articles > count) {
        setCodePromoError(
          `Ce code n'est valable qu'à partir de ${res.articles} articles`
        );
        return null;
      }

      return res;
    },
    [cart]
  );

  useEffect(() => {
    const fetchData = async () => {
      const productsDatabase = await fetchDataFromAPI(`/produits`, []);

      const cartState = cart.map((article) => {
        const selectedProduct = productsDatabase.find(
          ({ id }) => id == article.productId
        );

        const selectedProductType = selectedProduct?.type_de_produit.find(
          ({ id }) => article.productTypeId == id
        );

        if (!selectedProductType || !selectedProduct) {
          return { ...article, price: 0, image: "" };
        }

        return {
          ...article,
          title: selectedProduct.nom,
          value: selectedProductType.valeur || "",
          price: {
            value: selectedProductType.prix,
            promoted: selectedProductType.promotion?.actif
              ? selectedProductType.promotion.prix
              : null,
          },
          image: `${selectedProduct.apercu.url}`,
          stock: selectedProductType.stock,
        };
      });
      setProducts(cartState);

      let code;
      await getValidCodePromo(codePromo || "").then((res) => {
        code = res;
        if (!res && codePromo) {
          localStorage.removeItem("code");
          setCodePromo("");
        }
      });

      const subTotal = cartState.reduce((count, product) => {
        const price = product.price.promoted || product.price.value;
        const acc = count + price * product.quantity;
        return acc;
      }, 0);

      const info = await fetchDataFromAPI("/comandes-info", {});
      const reduction = (code?.pourcentage / 100) * subTotal || 0;
      const delivery =
        subTotal - reduction < info.prix_min_livraison_gratuite
          ? info.prix_livraison
          : 0;

      setDetailsPrice({
        subTotal,
        delivery,
        reduction,
      });
    };

    fetchData();
  }, [cart, codePromo, getValidCodePromo]);

  return (
    <Layout>
      <main className={styles.main}>
        <h2>Votre panier</h2>
        {products.length ? (
          <div className={styles.cartContainer}>
            <div className={styles.articleContainer}>
              {products.map((product, index) => (
                <Article
                  key={index}
                  {...product}
                  addToCart={() =>
                    addToCart(product.productId, product.productTypeId)
                  }
                  deleteToCart={() =>
                    deleteToCart(product.productId, product.productTypeId)
                  }
                  deleteArticle={() =>
                    deleteArticle(product.productId, product.productTypeId)
                  }
                />
              ))}
            </div>
            <div className={styles.codePromoContainer}>
              <h3>Code promo</h3>
              {!codePromo && (
                <>
                  <input
                    type="text"
                    placeholder="Entrez ici votre code promo"
                    value={codePromoText}
                    onChange={(e) => setCodePromoText(e.target.value)}
                  />
                  <button onClick={checkCodePromo}>✓</button>
                  <p>{codePromoError}</p>
                </>
              )}

              {codePromo && codePromo.length && (
                <div className={styles.codePromoWrapper}>
                  <p>{codePromo}</p>
                  <button
                    className={styles.secondButton}
                    onClick={() => {
                      setCodePromo("");
                      localStorage.removeItem("code");
                    }}
                  >
                    ❌
                  </button>
                </div>
              )}
            </div>

            <div className={styles.priceDetailsContainer}>
              <p>
                Sous-total : {parseFloat(detailsPrice.subTotal).toFixed(2)} €
              </p>
              <p>
                Réduction : -{parseFloat(detailsPrice.reduction).toFixed(2)} €
              </p>
              <p>
                Estimation des frais d&apos;expédition :{" "}
                {parseFloat(detailsPrice.delivery).toFixed(2)} €
              </p>
              <p>
                TTC : {parseFloat(detailsPrice.subTotal * 0.2).toFixed(2)} €
              </p>

              <p>
                Total :{" "}
                {parseFloat(
                  detailsPrice.subTotal +
                    detailsPrice.delivery -
                    detailsPrice.reduction
                ).toFixed(2)}{" "}
                €
              </p>
            </div>

            <div className={styles.payContainer}>
              <button onClick={goToPayment}>Passer au paiement</button>
            </div>
          </div>
        ) : (
          <div className={styles.cartContainer}>
            <h4>Votre panier est vide</h4>
          </div>
        )}
      </main>
    </Layout>
  );
}
