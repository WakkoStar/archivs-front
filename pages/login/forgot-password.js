import Layout from '../../components/Layout';
import styles from '../../styles/ContactPage.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { postDataToAPI } from '../../utils/dataPoster';

export default function ResetPage({}) {
  const [error, setError] = useState('');
  const [mail, setMail] = useState(undefined);
  const router = useRouter();
  const resetPassword = () => {
    if (!mail) {
      setError('Mail vide');
      return;
    }

    postDataToAPI(
      '/auth/forgot-password',
      { email: mail },
      () => {
        alert(
          'Votre email a été trouvé. Veuillez accéder à vos mails pour reinitialiser votre mot de passe'
        );
        router.replace('/login');
      },
      () => {
        alert("Impossible d'envoyer un mail, aucun compte avec cet email");
      }
    );
  };

  return (
    <Layout>
      <main className={styles.main}>
        <h2>Mot de passe oublié</h2>
        <input
          type='email'
          placeholder='Votre mail'
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
        <p className={styles.errorMessage}>{error}</p>
        <button onClick={() => resetPassword()}>Envoyer</button>
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  return { props: {}};
}
