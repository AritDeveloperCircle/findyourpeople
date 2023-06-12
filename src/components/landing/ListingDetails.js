import Image from "next/image";
import Link from "next/link";

const ListingDetails = ({ listing }) => {
  const LOGO_WIDTH = 20;
  const LOGO_HEIGHT = 20;
  const ICON_SRC = "/octicon_goal-24.png";
  return (
    <>
      {listing && (
        <main className="p-10">
          <article className="w-2/3 pb-5  lg:my-0 lg:px-12 ">
            <h1 className="font-medium text-xl py-1">Our Community</h1>
            <p>{listing.community_description}</p>
            <p>
              <Link href={listing.community_url} className="text-primary">
                Join us{" "}
              </Link>
              at {listing.community_name} and unlock your potentials as a
              developer!
            </p>
          </article>
          <div className=" flex items-center justify-center lg:w-11/12 bg-gray-lite my-6 mx-auto">
            <div className="bg-primary p-12  rounded ">
              <Image
                src={ICON_SRC}
                width={LOGO_WIDTH}
                height={LOGO_HEIGHT}
                alt=""
              />
              <h1 className="text-white pt-1">Our Community Vision</h1>
            </div>
            <p className="py-1 px-8 text-sm my-0 mx-auto">
              {listing.community_vision}
            </p>
          </div>
        </main>
      )}
    </>
  );
};

export default ListingDetails;