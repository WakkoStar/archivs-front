import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.scss';
import {fetchDataFromAPI } from '../utils/dataFetcher';
import { useEffect, useState } from 'react';
import { addContact } from '../utils/sendGridRequest';

export default function Layout({ children }) {
  const [footerLinks, setFooterLinks] = useState([]);
  const [data, setData] = useState({
    instagram_archivs_link: "",
    facebook_archivs_link : "",
    tiktok_archivs_link: "",
    archivs_footer_photos: []
  })
  // const [mail, setMail] = useState('');
  const [newsletterMail, setNewsletterMail] = useState('');
  // const [tel, setTel] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromAPI('/a-propos', {});
      setFooterLinks(data.footer_liens);
      console.log(data)
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Archiv&apos;s - Boutique de posters et dérivés</title>
        <meta
          name='description'
          content='Boutique de posters, mugs, paysages, dessins'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
      <footer className={styles.footer}>
        <div className={styles.coordsContainer} >
          <div className={styles.coordsWrapper}>
          <h3>REJOIGNEZ L'AVENTURE SUR </h3>
              <Link href={data?.instagram_archivs_link} passHref>
              <div className={styles.networkContainer}>
                <img src="https://i0.wp.com/voxeuropae.com/wp-content/uploads/2019/02/SKq9yH-black-and-white-instagram-logo-png.png?ssl=1"/>
                <p>Instagram</p>
                </div>
              </Link>
              <Link href={data?.facebook_archivs_link} passHref>
              <div className={styles.networkContainer}>
                <img src="https://cdn-icons-png.flaticon.com/512/59/59439.png"/>
                <p>Facebook</p>
                </div>
              </Link>
              <Link href={data?.tiktok_archivs_link} passHref>
              <div className={styles.networkContainer} >
                <img src="https://pnggrid.com/wp-content/uploads/2021/05/Black-TikTok-Logo-876x1024.png"/>
                <p>Tik Tok</p>
                </div>
              </Link>

          </div>
          <div className={styles.lastPhotosContainer}>
          {
            data?.archivs_footer_photos?.map(
              ({url, id}) => <img src={url} key={id}></img>
            )
          }
          </div>
        </div>
        <div className={styles.newsletterContainer}>
          <p>
            Veuillez saisir votre adresse e-mail pour vous abonner à la
            newsletter.
          </p>
          <input
            type='text'
            placeholder='Votre mail'
            onChange={(e) => setNewsletterMail(e.target.value)}
          />
          <button onClick={() => addContact(newsletterMail)}>Souscrire</button>
        </div>
        <div className={styles.linksContainer}>
          {footerLinks?.map(({ lien, nom, id, pdf }) => (
            <Link href={pdf ? `${pdf.url}` : lien} key={id}>
              <a>{nom}</a>
            </Link>
          ))}
        </div>
        <div className={styles.endContainer}>
          <p>@2022 Archiv&apos;s</p>
        </div>
      </footer>
    </div>
  );
}
