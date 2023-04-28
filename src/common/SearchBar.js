import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import FooterBar from "@/common/FooterBar";
import ReusableNavLink from "@/common/ReusableNavLink";
import Link from 'next/link';

function SearchBar() {
    return (
        <div>
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
        </div>
    )
}

export default SearchBar;