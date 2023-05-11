import Head from "next/head";
import Hero from "@/components/landing/Hero";
import styles from "@/styles/Home.module.css";
import Listing from "@/components/landing/listing";
import { listings } from "@/data/mockListings";
import FooterBar from "@/components/common/FooterBar";
import NavBar from "../components/Header/NavBar";
<<<<<<< HEAD



=======
>>>>>>> 8dc97bd1a56bb54601d005417cb65be4063822c8

export default function Home() {
    

  return (
    <>
      <Head>
        <title>Findyourpeople</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar />
        <Hero />
        <section className={styles.listingsContainer}>
          {listings.map((listing) => (
            <Listing data={listing} key={listing.id} />
          ))}
        </section>
      </main>
<<<<<<< HEAD
      < FooterBar />
      
=======
      <FooterBar />
>>>>>>> 8dc97bd1a56bb54601d005417cb65be4063822c8
    </>
  );
}