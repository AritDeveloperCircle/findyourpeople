import Link from "next/link";
import Image from "next/image";

function Listing({ data }) {
  return (
    <>
      <article className="listing">
        <div className="listing__image">
          <Image src="" width={50} height={50} alt={`${data.name} avatar`} />
        </div>
        <div className="listing__content">
          <h2 className="listing__content__name">{data.name}</h2>
          <p className="listing__content__manager">{data.manager}</p>
          <p className="listing__content__description">{data.description}</p>
          <Link href={`/${encodeURIComponent(data.id)}`}>view more</Link>
        </div>
      </article>
    </>
  );
}
export default Listing;
