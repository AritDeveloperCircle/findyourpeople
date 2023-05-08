import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from './NavBar.module.css';

export default function NavBar() {
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
            
            <form>
                <input id="search-input-bar" type="text" placeholder="Search" name='search' required/>
                <button type='submit'>
                    <Image
                        src="/search-glass.svg"
                        alt="Search Image"
                        className={styles.searchImage}
                        width={20}
                        height={20}
                    />
                </button>
            </form>
            
            <ul className={styles.nav}>
                <li>Create Listing</li>
                <li>Log Out</li>
            </ul>
        </div>
    );
}
