
import Link from "next/link";
import Image from "next/image";
import styles from "./listing.module.css";

function Listing({ data }) {
  const avatarWidth = 200
  const avatarHeight = 200

  return (
    <>
      <article className="bg-grey-lite my-2.5 mx-4 px-13 max-w-xl md:max-w-3xl lg:max-w-5xl h-85 lg:max-h-max rounded-2xl drop-shadow-md flex content-center font-sans">
        <div className={styles.listing__image__container}>
          <Image className="ml-8 mt-6 rounded-full"
            src="/avatar 1.png"
            width={avatarWidth} height={avatarHeight}
            alt={`${data.community_name} avatar`}  />
        </div> 
        <div className="ml-12 mt-8 mb-4 mr-8 md:mb-4 w-89 h-29 font-normal text-xl tracking-wide text-gray-dark">
          <h2 className="text-primary-dark capitalize font-medium text-2xl ">{data.community_name}</h2>
          <p className="italic text-gradient-lite-blue capitalize text-xl font-medium"> {data.community_manager} </p>
          <p className="text-grey-dark font-normal text-xl"> {data.community_description}</p>
          <Link href={`/${encodeURIComponent(data.communitd_id)}`} className="text-gradient-lite-blue uppercase text-xs mt-8">view more &gt;      
          </Link>
        </div>
      </article>
    </>
  );
}
export default Listing;