import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from './NavBar.module.css';
import SearchBar from './SearchBar';
import ReusableNavLink from '@/common/ReusableNavLink';




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
            
            < SearchBar />
            
            <ul className={styles.nav}>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
            </ul>
        </div>
    );
}

export default NavBar;