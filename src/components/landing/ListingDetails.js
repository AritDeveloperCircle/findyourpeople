import Image from "next/image";
import Link from "next/link";
import EmptyListing from "./EmptyListing";
import { useEffect, useState } from "react";
import Loading from "../common/Loading";

const ListingDetails = ({ listing }) => {
  const LOGO_WIDTH = 20;
  const LOGO_HEIGHT = 20;
  const ICON_SRC = "/octicon_goal-24.png";

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (listing) {
      setIsLoading(false);
    }
  }, [listing]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : listing ? (
        <main>
          <section className="p-10">
            <article className="w-2/3 pb-5  lg:my-0 lg:px-12 ">
              <h1 className="font-medium text-xl py-1">Our Community</h1>
              <p>{listing.community_description}</p>
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
              <p className="py-1 px-8 text-sm my-0 mx-auto py-2">
                {listing.community_vision}
              </p>
            </div>
          </section>
          <div className="bg-gradient-lite-grey flex justify-between gap-2 p-[52px] mt-12 ">
            <h2 className="text-grey-dark text-lg sm:text-lg lg:text-xl font-medium leading-[52px]">
              Would you like to be a part of this community?
            </h2>
            <Link
              href={listing.community_url}
              className="bg-gradient-lite-blue cursor-pointer rounded-md w-[250px] text-center px-6 py-2 text-white shadow-sm hover:bg-indigo-500 flex justify-center items-center"
            >
              Visit Community
            </Link>
          </div>
        </main>
      ) : (
        <EmptyListing />
      )}
    </>
  );
};

export default ListingDetails;
