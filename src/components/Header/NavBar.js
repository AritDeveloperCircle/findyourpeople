import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from './NavBar.module.css';
import ReusableNavLink from '../common/ReusableNavLink';


export default function NavBar() {
    const navList = [
        { text: "About", href: "/about" },
        { text: "Contact", href: "/contact" },
      ];

    return (
        <div className=" relative flex items-center justify-evenly sm:text-left md:flex py-4 px-9 lg:flex-row flex-col">
            <Link href="/">
                <Image
                    src="/LOGO.png"
                    alt="Find Your People Tech Logo"
                    className="sm:h-full"
                    width={80}
                    height={28}
                    priority
                />
            </Link>
            <container className="flex gap-6">
            <ul className="flex items-center justify-between gap-10">
                {navList.map(({ text, href }) => (
                    <ReusableNavLink key={href} text={text} href={href} />
                ))}
            </ul>

                <form className="flex items-center border-2 border-solid border-gray-300 rounded-xl border-r-0" role="search">
                    <div className="center flex px-3 min-w-fit">
                        <Image
                            src="/search-glass.svg"
                            alt="Search Image"
                            width={20}
                            height={20}
                        />
                        <input id="searchInputBar" type="text" placeholder="Search for..." name='search' aria-label="Search through communities" size="40" required/>
                    </div>
                    <button type='submit' className="bg-gradient-to-r from-blue-800 to-sky-950 text-white py-2 px-6 rounded-xl hover:bg-gray-500 active:bg-gray-600 focus: outline-none focus:ring-2 focus:ring-blue-300">SEARCH</button>
                </form>
            </container>
            
        </div>
    );
}
