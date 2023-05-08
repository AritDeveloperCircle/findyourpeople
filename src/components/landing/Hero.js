import Link from "next/link";
import styles from "./hero.module.css";
function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroWrap}>
        <h1>find your people</h1>
        <p>Find communities that interest you</p>
        <p>Are you a community manager?</p>
        <p>Add your community to our directory for users to find and join</p>
        <Link href="/register" className={styles.register}>
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default Hero;
