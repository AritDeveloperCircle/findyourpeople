import Link from "next/link";
import Image from "next/image";
import styles from "./listing.module.css";

function Listing({ data }) {
  return (
    <>
      <article className={styles.listing}>
        <div className={styles.listing__content}>
          <h2 className={styles.listing__content__name}>
            {data.community_name}
          </h2>
          <p className={styles.listing__content__manager}>
            {" "}
            {data.community_manager}{" "}
          </p>
          <p className={styles.listing__content__description}>
            {" "}
            {data.community_description}
          </p>
          <Link
            href={{
              pathname: "/[community_id]",
              query: {
                community_id: data.community_id,
                title: data.uid,
              },
            }}
            className={styles.listing__view__more}
          >
            view more
          </Link>
        </div>
      </article>
    </>
  );
}
export default Listing;
