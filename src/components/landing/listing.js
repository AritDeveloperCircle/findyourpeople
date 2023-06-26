import Link from "next/link";
import Image from "next/image";

function Listing({ data }) {
  const avatarWidth = 100;
  const avatarHeight = 100;

  return (
    <>
      <article className="bg-grey-lite rounded-2xl drop-shadow-md flex gap-4 items-start font-sans px-4 py-6">
          <Image
            className="rounded-full"
            src="/avatar 1.png"
            width={avatarWidth}
            height={avatarHeight}
            alt={`${data.community_name} avatar`}
          />
        <div className="font-normal text-xl tracking-wide text-gray-dark">
          <h2 className="text-primary-dark capitalize font-medium text-2xl ">
            {data.community_name}
          </h2>
          <p className="italic text-gradient-lite-blue capitalize text-lg font-medium mb-2">
            {data.community_manager}
          </p>
          <p className="text-grey-dark font-normal text-lg">
            {data.community_description}
          </p>
          <Link
            href={`/${encodeURIComponent(data.community_id)}`}
            className="text-gradient-lite-blue uppercase text-xs mt-8"
          >
            view more &gt;
          </Link>
        </div>
      </article>
    </>
  );
}
export default Listing;
