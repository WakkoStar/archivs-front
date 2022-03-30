import Layout from '../../components/Layout';
import Link from 'next/link';
import styles from '../../styles/AccountPage.module.scss';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetchDataFromAPI } from '../../utils/dataFetcher';

export default function SucceedPage() {
  const [commande, setCommande] = useState({ uuid: '...' });
  const router = useRouter();
  const commandeId = router.query && router.query.commandeId;

  useEffect(() => {
    const fetchData = async () => {
      const user =
        (typeof window !== 'undefined' &&
          localStorage.getItem('user') &&
          JSON.parse(localStorage.getItem('user'))) ||
        undefined;

      const res = await fetchDataFromAPI(
        '/commandes/me/' + commandeId,
        { uuid: '' },
        { headers: { Authorization: `Bearer ${user?.jwt}` } }
      );
      setCommande(res);
    };

    fetchData();
  }, [commandeId]);

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.suceedContainer}>
          <h2>Merci !</h2>
          <h3>Votre commande {commande.uuid} a bien été prise</h3>
          <p>
            Vous allez recevoir un mail avec les détails de votre commande. Vous
            ne serez que débité une fois la commande expédié
          </p>
          <Link href='/mon-compte?page=commandes'>
            <a>Voir mes commandes</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
