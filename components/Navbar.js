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
  const [isMenuOpened, setIsMenuOpened] = useState(false);

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
        <div
          className={isMenuOpened ? styles.linksSelected : styles.links}
          onClick={() => setIsMenuOpened(false)}
        >
          <Link href='/' passHref>
            <p>Présentation</p>
          </Link>
          <Link href='/boutique?sort=ventes&desc=true' passHref>
            <p>Boutique</p>
          </Link>
          <Link href='/actualites' passHref>
            <p>Actualités</p>
          </Link>
          <Link href='/contact' passHref>
            <p>Contact</p>
          </Link>
      </div>
        <div style={{ display: 'flex' }}>
          {isConnected !== undefined && (
            <Link href={isConnected ? '/mon-compte' : '/login'} passHref>
              <Image alt='mon compte' src={accountPic} color='white' />
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
          <div className={styles.mobileNav}>
            <Image alt='menu' src={isMenuOpened ? closePic : menuPic} onClick={() => setIsMenuOpened(!isMenuOpened)}/>
          </div>
        </div>
      </div>
    </div>
  );
}
