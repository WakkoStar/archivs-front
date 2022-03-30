import Layout from '../../components/Layout';
import styles from '../../styles/ContactPage.module.scss';
import { useState } from 'react';
import { addContact } from '../../utils/sendGridRequest';

export default function ResetPage({}) {
  const [error, setError] = useState('');
  const [mail, setMail] = useState(undefined);

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
