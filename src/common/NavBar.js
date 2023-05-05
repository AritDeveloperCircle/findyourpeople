import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import SearchBar from '../common/SearchBar';
import ReusableNavLink from '../common/ReusableNavLink';
import Data from '@/mock-data.json';


function NavBar() {
    return (
        <div className={styles.container}>
            <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            
            < SearchBar placeholder="Search for Community..." data={Data}  />

            
            
            <ul className={styles.nav}>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
            </ul>
        </div>
    );
}

export default NavBar;