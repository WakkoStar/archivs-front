import Layout from '../../components/Layout';
import Link from 'next/link';
import styles from '../../styles/ContactPage.module.scss';
import { BASE_URL, fetchDataFromAPI } from '../../utils/dataFetcher';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { postDataToAPI, putDataToAPI } from '../../utils/dataPoster';
import { addContact } from '../../utils/sendGridRequest';

export default function ResetPage({}) {
  const [error, setError] = useState('');
  const [mail, setMail] = useState(undefined);
  const router = useRouter();

  const subscribe = () => {
    if (!mail) {
      setError('Mail vide');
      return;
    }

    addContact(mail);
  };

  return (
    <Layout>
      <main className={styles.main}>
        <h2>Newsletter</h2>
        <input
          type='email'
          placeholder='Votre mail'
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <button onClick={() => subscribe()}>Souscrire</button>
        <p className={styles.errorMessage}>{error}</p>
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  return { props: {} };
}
