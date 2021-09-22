import Head from 'next/head';
import Link from 'next/link';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.scss';
import {fetchDataFromAPI } from '../utils/dataFetcher';
import { useEffect, useState } from 'react';
import { addContact } from '../utils/sendGridRequest';

export default function Layout({ children }) {
  const [footerLinks, setFooterLinks] = useState([]);
  const [instagramLink, setInstagramLink] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [mail, setMail] = useState('');
  const [newsletterMail, setNewsletterMail] = useState('');
  const [tel, setTel] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromAPI('/a-propos', {});
      setFooterLinks(data.footer_liens);
      setInstagramLink(data.instagram_link);
      setFacebookLink(data.facebook_link);
      setMail(data.mail_personnel);
      setTel(data.tel_personel);
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
        <div className={styles.linksContainer}>
          {footerLinks.map(({ lien, nom, id, pdf }) => (
            <Link href={pdf ? `${pdf.url}` : lien} key={id}>
              <a>{nom}</a>
            </Link>
          ))}
        </div>
        <div className={styles.spacer}></div>
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
        <div className={styles.endContainer}>
          <p>@2021 Archiv&apos;s</p>
        </div>
      </footer>
    </div>
  );
}
