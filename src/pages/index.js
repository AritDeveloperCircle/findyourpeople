import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Listing from "@/components/landing/listing";
import FooterBar from "@/common/FooterBar";
import ReusableNavLink from "@/common/ReusableNavLink";


export default function Home() {
  const listings = [
    {
      id: 1,
      name: "arit developer circle",
      manager: "Arit dev",
      description:
        "Arit developer circle is a community of developers who are passionate about building software products and services that solve real world problems.",
    },
    {
      id: 2,
      name: "arit developer circle",
      manager: "Arit dev",
      description:
        "Arit developer circle is a community of developers who are passionate about building software products and services that solve real world problems.",
    },
    {
      id: 3,
      name: "arit developer circle",
      manager: "Arit dev",
      description:
        "Arit developer circle is a community of developers who are passionate about building software products and services that solve real world problems.",
    },
    {
      id: 4,
      name: "arit developer circle",
      manager: "Arit dev",
      description:
        "Arit developer circle is a community of developers who are passionate about building software products and services that solve real world problems.",
    },
  ];
   
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {listings.map((data) => (
          <Listing data={data} key={data.id} />
        ))}
      </main>
      <FooterBar />
    </>
  );
}
