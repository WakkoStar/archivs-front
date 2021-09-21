import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import accountPic from '../assets/logos/account.png';
import panierPic from '../assets/logos/panier.png';
import closePic from '../assets/logos/croix.png';
import logoPic from '../assets/logos/archivs-logo.png';
import menuPic from '../assets/logos/menu.png';

import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
  const [isConnected, setIsConnected] = useState(undefined);

  const count =
    (typeof window !== 'undefined' &&
      localStorage.getItem('cart') &&
      JSON.parse(localStorage.getItem('cart')).reduce((total, { quantity }) => {
        return (total += quantity);
      }, 0)) ||
    0;

  useEffect(() => {
    const fetchData = () => {
      const user =
        (typeof window !== 'undefined' &&
          localStorage.getItem('user') &&
          JSON.parse(localStorage.getItem('user'))) ||
        undefined;

      setIsConnected(user != undefined);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <div className={styles.companyNameContainer}>
          <Link href='/' passHref>
            <Image alt='logo' src={logoPic} />
          </Link>
        </div>
        <div style={{ display: 'flex' }}>
          {isConnected !== undefined && (
            <Link href={isConnected ? '/mon-compte' : '/login'} passHref>
              <Image alt='mon compte' src={accountPic} />
            </Link>
          )}

          <Link href='/panier' passHref>
            <div>
              <Image alt='panier' src={panierPic} />
              <div className={styles.badgeCount}>
                <p>{count}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
