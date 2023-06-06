import Link from "next/link";
import Image from "next/image";
import styles from "./listing.module.css";

function Listing({ data }) {
  const avatarWidth = 109
  const avatarHeight = 109
  return (
    <>
      <article className="bg-grey-lite rounded-lg drop-shadow-md flex justify-content-center font-sans">
        <div className={styles.listing__image__container}>
          <Image className="ml-8 mt-6 rounded-full"
            src="/image-placeholder.png"
            width={avatarWidth} height={avatarHeight}
            alt={`${data.community_name} avatar`}  />
        </div>
        <div className=" ml-12 mb-8 mr-8 mt-8 rounded-lg">
          <h2 className="text-primary-dark capitalize font-medium text-2xl ">{data.community_name}</h2>
          <p className="italic text-gradient-lite-blue capitalize text-xl font-medium"> {data.community_manager} </p>
          <p className="text-grey-dark font-normal text-xl"> {data.community_description}</p>
          <Link href={`/${encodeURIComponent(data.communitd_id)}`} className="text-gradient-lite-blue uppercase text-xs">view more &gt;
          </Link>
        </div>
      </article>
    </>
  );
}
export default Listing;
