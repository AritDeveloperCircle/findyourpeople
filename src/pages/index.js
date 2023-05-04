import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Listing from "@/components/landing/listing";
import { listings } from "@/data/mockListings";
import FooterBar from "@/common/FooterBar";

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
        <section className={styles.listings_container}>
          {listings.map((listing) => (
            <Listing data={listing} key={listing.id} />
          ))}
        </section>
      </main>
      
    </>
  );
}