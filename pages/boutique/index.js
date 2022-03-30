import Image from "next/image";
import Layout from "../../components/Layout";
import Product from "../../components/Product";
import styles from "../../styles/BoutiquePage.module.scss";
import FilterPic from "../../assets/logos/filter.png";
import { fetchDataFromAPI } from "../../utils/dataFetcher";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function BoutiquePage({ categories, products, codePromo }) {
  const [sort, setSort] = useState(false);
  const router = useRouter();
  const [sortedProducts, setSortedProducts] = useState([]);
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

  const setFilterAndUrl = (filter) => {

    if(filter == undefined) {
      delete router.query.c;
      router.push({
        pathname: '/boutique',
        query: { ...router.query },
      })
      return
    }

    router.push({
      pathname: '/boutique',
      query: { ...router.query,c: filter },
    })
  }

  const setSortTypeAndUrl = (sortedType) => {
    router.push({
      pathname: '/boutique',
      query: { ...router.query, sort: sortedType.sort, desc: sortedType.desc },
    })
  }

  useEffect(() => {
     const sortProducts = async() => {
      if(!router.query.sort || !router.query.desc) {
        router.push({
          pathname: '/boutique',
          query: { ...router.query, sort: "ventes", desc: true },
        })
        return;
      }
      const type = router.query.sort;
      const desc = router.query.desc === "true";
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

    sortProducts();
  }, [products, router.query]);

  return (
    <Layout>
      <main className={styles.main} >
        <div className={styles.categoryContainer}>
          <ul>
            <li onClick={() => setFilterAndUrl(undefined)} className={router.query.c == undefined ? styles.selected : undefined}>Tout</li>
            {categories.map(({ id, nom, slug }) => (
              <li key={id} onClick={() => setFilterAndUrl(slug)}  className={router.query.c == slug ? styles.selected : undefined}>
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
            <p 
            onClick={() => setSortTypeAndUrl({ sort: "ventes", desc: true })}  
            className={router.query.sort == "ventes" && router.query.desc == "true" ? styles.selected : undefined}
            >
              Popularité
            </p>
            <p 
              onClick={() => setSortTypeAndUrl({ sort: "prix", desc: false })}
              className={router.query.sort == "prix" && router.query.desc == "false" ? styles.selected : undefined}
              >
              Prix croissant
            </p>
            <p 
              onClick={() => setSortTypeAndUrl({ sort: "prix", desc: true })}
              className={router.query.sort == "prix" && router.query.desc == "true" ? styles.selected : undefined}
            >
              Prix décroissant
            </p>
            <p 
              onClick={() => setSortTypeAndUrl({ sort: "nom", desc: false })}
              className={router.query.sort == "nom" && router.query.desc == "false" ? styles.selected : undefined}
            >
              Nom
            </p>
            <p
              onClick={() => setSortTypeAndUrl({ sort: "created_at", desc: true })}
              className={router.query.sort == "created_at" && router.query.desc == "true" ? styles.selected : undefined}
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
                categories_produits.find(({ slug }) => slug === router.query.c) ||
                router.query.c == undefined;

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
                  src={`${apercu.url}`}
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
