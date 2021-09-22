import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/Layout";
import Product from "../components/Product";
import styles from "../styles/BoutiquePage.module.scss";
import FilterPic from "../assets/logos/filter.png";
import { BASE_URL, fetchDataFromAPI } from "../utils/dataFetcher";
import { useState, useEffect } from "react";

export default function BoutiquePage({ categories, products, codePromo }) {
  const [filter, setFilter] = useState(undefined);
  const [sort, setSort] = useState(false);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortedType, setSortedType] = useState({ sort: "ventes", desc: true });
  const [filterText, setFilterText] = useState("");

  const filterProduct = ({ nom, tags }, text) => {
    if (text == "") {
      return true;
    }
    return (
      nom.toLowerCase().includes(text.toLowerCase()) ||
      tags.some(({ texte }) => texte.toLowerCase().includes(text.toLowerCase()))
    );
  };

  useEffect(() => {
    const sortProducts = () => {
      const type = sortedType.sort;
      const desc = sortedType.desc;
      setSort(false);

      let res = products;
      if (type == "prix") {
        res = res.sort((a, b) => {
          let settedMinPriceA = Number.MAX_VALUE;
          a.type_de_produit.forEach(({ prix, promotion }) => {
            if (promotion?.actif && promotion?.value < settedMinPriceA) {
              settedMinPriceA = promotion?.value;
              return;
            }
            if (prix < settedMinPriceA) {
              settedMinPriceA = prix;
            }
          });
          let settedMinPriceB = Number.MAX_VALUE;
          b.type_de_produit.forEach(({ prix, promotion }) => {
            if (promotion?.actif && promotion?.value < settedMinPriceB) {
              settedMinPriceB = promotion?.value;
              return;
            }
            if (prix < settedMinPriceB) {
              settedMinPriceB = prix;
            }
          });
          return desc
            ? settedMinPriceB - settedMinPriceA
            : settedMinPriceA - settedMinPriceB;
        });
      } else if (type == "created_at") {
        res = res.sort((a, b) => Date.parse(b[type]) - Date.parse(a[type]));
      } else if (type == "nom") {
        res = res.sort((a, b) => a[type].localeCompare(b.type));
      } else {
        res = res.sort((a, b) =>
          desc ? b[type] - a[type] : a[type] - b[type]
        );
      }
      setSortedProducts(res);
    };

    sortProducts("prix");
  }, [products, setSortedType, sortedType]);

  return (
    <Layout>
      <main
        className={styles.main}
        style={{ marginTop: codePromo.banniere ? "17%" : "20%" }}
      >
        {codePromo.banniere && (
          <img
            src={`${BASE_URL}${codePromo.banniere.url}`}
            className={styles.banniere}
            alt="banniere"
          />
        )}
        <h2>Produits</h2>
        <div className={styles.categoryContainer}>
          <ul>
            <li onClick={() => setFilter(undefined)}>Tout</li>
            {categories.map(({ id, nom, slug }) => (
              <li key={id} onClick={() => setFilter(slug)}>
                {nom}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.productsSortContainer}>
          <button onClick={() => setSort(!sort)}>
            <Image src={FilterPic} alt="filter" />
          </button>
          <div
            className={
              styles[
                sort ? "productsSortDropdownSelected" : "productsSortDropdown"
              ]
            }
          >
            <p onClick={() => setSortedType({ sort: "ventes", desc: true })}>
              Popularité
            </p>
            <p onClick={() => setSortedType({ sort: "prix", desc: false })}>
              Prix croissant
            </p>
            <p onClick={() => setSortedType({ sort: "prix", desc: true })}>
              Prix décroissant
            </p>
            <p onClick={() => setSortedType({ sort: "nom", desc: false })}>
              Nom
            </p>
            <p
              onClick={() => setSortedType({ sort: "created_at", desc: true })}
            >
              Nouveauté
            </p>
          </div>
          <input
            type="text"
            placeholder="Rechercher"
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>
        <div className={styles.productsWrapper}>
          {sortedProducts.map(
            ({
              id,
              nouveau,
              stock,
              apercu,
              type_de_produit,
              nom,
              categories_produits,
              tags,
            }) => {
              const isSelected =
                categories_produits.find(({ slug }) => slug === filter) ||
                filter == undefined;

              const isSearched = filterProduct({ nom, tags }, filterText);

              if (!isSelected || !isSearched) {
                return null;
              }
              return (
                <Product
                  id={id}
                  key={id}
                  data={{ nouveau, stock, type_de_produit }}
                  title={nom}
                  src={`${BASE_URL}${apercu.url}`}
                />
              );
            }
          )}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const categories = await fetchDataFromAPI("/categories", []);
  const products = await fetchDataFromAPI("/produits", []);
  const codePromo = await fetchDataFromAPI("/codes-promos/check/public", {});
  return {
    props: { categories, products, codePromo },
    revalidate: 60, 
  };
}
