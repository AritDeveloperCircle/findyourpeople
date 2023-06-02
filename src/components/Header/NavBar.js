import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from './NavBar.module.css';
import ReusableNavLink from '../common/ReusableNavLink';

export default function NavBar() {
    return (
        <div class=" relative flex items-center justify-evenly w-full text-lg py-4 px-24">
            <Link href="/">
                <Image
                    src="/LOGO.png"
                    alt="Find Your People Tech Logo"
                    className={styles.vercelLogo}
                    width={80}
                    height={28}
                    priority
                />
            </Link>
            <div class="flex items-center justify-between gap-10">
                <Link href="/" class="text-slate-700 hover:text-blue-500 cursor-pointer">Home</Link>
                <Link href="#" class="text-slate-700 text-base hover:text-blue-500 cursor-pointer">About Us</Link>
                <Link href="#" class="text-slate-700 text-base hover:text-blue-500 cursor-pointer">Contact</Link>
                <form class="flex items-center border-2 border-solid border-gray-300 rounded-xl border-r-0" role="search">
                    <div class="flex gap-3 px-3">
                        <Image
                            src="/search-glass.svg"
                            alt="Search Image"
                            className={styles.searchImage}
                            width={20}
                            height={20}
                        />
                        <input id="searchInputBar" type="text" placeholder="Search for..." name='search' aria-label="Search through communities" size="40" required/>
                    </div>
                    <button type='submit' class="bg-gradient-to-r from-blue-800 to-sky-950 text-white py-2 px-6 rounded-xl hover:bg-gray-500 active:bg-gray-600 focus: outline-none focus:ring-2 focus:ring-blue-300">SEARCH</button>
                </form>
            </div>
        </div>
    );
}
