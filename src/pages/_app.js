import "@/styles/globals.css";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${urbanist.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
