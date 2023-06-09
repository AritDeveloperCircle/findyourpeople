import Head from "next/head";
import Hero from "@/components/landing/Hero";
import styles from "@/styles/Home.module.css";
import Listing from "@/components/landing/listing";
import FooterBar from "@/components/common/FooterBar";
import NavBar from "../components/Header/NavBar";
import { useCollection } from "@/hook/useCollection";
import { useState } from "react";

export default function Home() {
  const { data, error, isLoading } = useCollection();
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    return setQuery(e.target.value);
  };

  const fetchData = (e) => {
    const listing = document.querySelectorAll("article");
    if (e.target.value !== "") {
      Array.from(listing).forEach((article) => {
        if (
          article
            .querySelector(".community-name")
            .textContent.includes(e.target.value)
        ) {
          article.style.display = "block";
        } else {
          article.style.display = "none";
        }
      });
    } else {
      Array.from(listing).forEach((article) => {
        article.style.display = "block";
      });
    }
  };

  return (
    <>
      <Head>
        <title>Findyourpeople</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar
          query={query}
          handleInputChange={handleInputChange}
          data={data}
          fetchData={fetchData}
        />
        <Hero />
        <section className='p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {isLoading && <>loading...</>}
          {error && <>{error}</>}         
          {data.map((listing) => (
            <Listing data={listing} key={listing.community_id} />
          ))}
        </section>
      </main>
      <FooterBar />
    </>
  );
}
