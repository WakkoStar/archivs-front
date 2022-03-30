import Layout from '../../components/Layout';
import styles from '../../styles/ContactPage.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { postDataToAPI } from '../../utils/dataPoster';

export default function ResetPage({}) {
  const router = useRouter();
  const [error, setError] = useState('');
  const code = router?.query?.code;
  const [inputShow, setInputShow] = useState(false);
  const [password, setPassword] = useState(undefined);

  const resetPassword = () => {
    if (password.length < 8) {
      setError('Mot de passe trop court');
      return;
    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)) {
      setError(
        'Votre mot de passe doit contenir au moins une majuscule, une minuscule et un nombre'
      );
      return;
    }
    postDataToAPI(
      '/auth/reset-password',
      {
        code,
        password,
        passwordConfirmation: password,
      },
      () => {
        alert('Mot de passe changé avec succés');
        router.replace('/');
      },
      () => {
        alert('Impossible de changer de mot de passe...');
      }
    );
  };

  return (
    <Layout>
      <main className={styles.main}>
        <h2>Changement de mot de passe</h2>
        <input
          type={inputShow ? 'text' : 'password'}
          placeholder='Mot de passe'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label
          className={styles.showPassword}
          onClick={() => setInputShow(!inputShow)}
        >
          {inputShow ? 'Cacher le mot de passe' : 'Montrer le mot de passe'}
        </label>
        <p className={styles.errorMessage}>{error}</p>
        <button onClick={() => resetPassword()}>Changer</button>
      </main>
    </Layout>
  );
}

export async function getStaticProps(context) {
  return { props: {} };
}
