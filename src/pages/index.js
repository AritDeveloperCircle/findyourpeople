import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import FooterBar from "@/common/FooterBar";
import ReusableNavLink from "@/common/ReusableNavLink";
import Link from 'next/link';
import NavBar from '../common/NavBar';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar />
      </main>
      <FooterBar />
    </>
  );
}
