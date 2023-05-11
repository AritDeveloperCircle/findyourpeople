import Link from "next/link";
import Image from "next/image";
import styles from "./listing.module.css";

function Listing({ data }) {
  return (
    <>
      <article className={styles.listing}>
        <div className={styles.listing__image__container}>
          <Image
            src="/image-placeholder.png"
            width={50} height={50}
            alt={`${data.community_name} avatar`}  />
        </div>
        <div className={styles.listing__content}>
          <h2 className={styles.listing__content__name}>{data.community_name}</h2>
          <p className={styles.listing__content__manager}> {data.community_manager} </p>
          <p className={styles.listing__content__description}> {data.community_description}</p>
          <Link href={`/${encodeURIComponent(data.communitd_id)}`}  className={styles.listing__view__more}>view more
          </Link>
        </div>
      </article>
    </>
  );
}
export default Listing;
