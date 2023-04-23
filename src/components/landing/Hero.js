import Link from "next/link";
function Hero() {
  return (
    <section className={styles.hero}>
      <h1>
        find your people <br />
      </h1>
      <p>

      </p>
      <p>
        <span className={styles.hero__span}>
          A place to connect with like-minded people
        </span>
      </p>
      <p>
        Are you a community manager? <br />
        <span className={styles.hero__span}>
          Add your community to our directory for users to find and join
        </span>
      </p>
      <Link href="/register">
        <a>Get Started</a>
      </Link>
    </section>
  );
}

export default Hero;
