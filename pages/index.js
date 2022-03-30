import { useEffect} from 'react';
import Layout from "../components/Layout";
import styles from "../styles/Accueil.module.scss"
import Product from "../components/Product";
import { fetchDataFromAPI } from "../utils/dataFetcher";
import Link from 'next/link';

export default function HomePage({
  faq,
  presentation,
  produits_populaires,
  produits_nouveaux,
  client_conquis,
  image_presentation,
  image_banniere,
  image_produit
}) {

  useEffect(() => {
  }, [])

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.presentationContainer}>
          <div className={styles.texts}>
            <h3>LE DUO DE CHOC POUR VOTRE INTÉRIEUR</h3>
            <h2>LETTRAGE & PHOTOGRAPHIE</h2>
            <Link href="/boutique?c=posters&sort=ventes&desc=true" passHref>
              <button>
                Parcourir tous les posters
              </button>
            </Link>

            </div>  
          <div className={styles.image}><img src={image_banniere?.url}></img></div>
        </div>
        <div className={styles.newProductsContainer}>
          <div className={styles.texts}>
            <h2>LES DERNIÈRES CRÉATIONS</h2>
            <h3>Réfléchir c&apos;est bien, concevoir c&apos;est mieux.</h3>
          </div>  
          <div className={styles.newProductsWrapper}>
              {produits_nouveaux?.map(
                ({
                  id,
                  nouveau,
                  stock,
                  apercu,
                  type_de_produit,
                  nom,
                }) => {
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
          <Link href="/boutique?sort=created_at&desc=true" passHref>
            <button>
              En voir plus
            </button>
          </Link>
        </div>
        <div className={styles.parcoursContainer}>
        <img src={image_presentation?.url}></img>
        <h2>PRÉSENTATION</h2>
        <pre>
        {presentation}
        </pre>
        </div>
        <div className={styles.qualityContainer}>
        <div className={styles.qualityImage}><img src={image_produit?.url}/></div>
          <div className={styles.qualityTexts}>
            <div className={styles.qualityWrapper}>
            <img src="https://img.icons8.com/glyph-neue/100/000000/weight-kg.png"/>
              <h2>PAPIER MAT DURABLE 200G/M2</h2>
            </div>
            <div className={styles.qualityWrapper}>
            <img src="https://img.icons8.com/ios/100/000000/drop-of-blood--v2.png"/>
              <h2>COULEURS ÉCLATANTES</h2>
            </div>
          </div>  
        </div>
        <div className={styles.parcoursContainer}>
        <h2>FAQ</h2>
        <pre>
        {faq}
        </pre>
        </div>
        <div className={styles.galleryContainer}>
          <h2>DES CLIENTS CONQUIS ?</h2>
          <h3>Parce qu&apos;une image vaut mille mots...</h3>
          <div className={styles.galleryWrapper}>
            {client_conquis?.map(({id, url}) => 
              <img key={id} src={url}></img>
            )}
          </div>
        </div>
        <div className={styles.newProductsContainer}>
          <div className={styles.texts}>
            <h2>LES PLUS POPULAIRES</h2>
            <h3>Pour un intérieur à votre image.</h3>
          </div>  
          <div className={styles.newProductsWrapper}>
              {produits_populaires?.map(
                ({
                  id,
                  nouveau,
                  stock,
                  apercu,
                  type_de_produit,
                  nom,
                }) => {
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
          <Link href="/boutique?sort=ventes&desc=true" passHref>
            <button>
              En voir plus
            </button>
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {

  // const products = await fetchDataFromAPI("/produits", []);
  const homepage = await fetchDataFromAPI("/home-page-archivs", {
    faq: '',
    presentation: '',
    produits_populaires: [],
    produits_nouveaux: [],
    client_conquis: [], //{url: ""}[]
    image_presentation: {url: ""},
    image_banniere: {url: ""},
    image_produit: {url: ""}
  })

  return {
    props: { ...homepage },
    revalidate: 60,
  };
}
