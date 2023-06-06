import CustomizableAvatar from "../common/customavatar/CustomizableAvatar";
import Link from "next/link";
import Image from "next/image";

const CommunityHeader = ({ listing }) => {
  const photo = "/community dashoard  img 1.jpg";
  const Manager_Avatar = "/avarar 1.png";
  const AVATAR_WIDTH = 50;
  const AVATAR_HEIGHT = 50;
  const SmallAvatar_WIDTH = 20;
  const SmallAvatar_HEIGHT = 20;
  const LOGO_WIDTH = 20;
  const LOGO_HEIGHT = 20;
  return (
    <header className="">
      <div className=" bg-primary-lite p-5  flex items-center justify-between px-10">
        <h1 className="text-grey-dark text-xl font-medium capitalize">
          {listing?.community_name}
        </h1>

        <div className="flex items-center px-4">
          <div className="flex items-center bg-white rounded-lg py-2 px-4 text-justify">
            <CustomizableAvatar
              src={Manager_Avatar}
              width={SmallAvatar_WIDTH}
              height={SmallAvatar_HEIGHT}
              className={"rounded-full"}
            />
            <p className="text-primary text-sm text-center pl-1 capitalize">
              {listing?.community_manager}
            </p>
          </div>

          {listing &&
            listing.social_links &&
            Object.keys(listing.social_links).map((key) => (
              <Link
                key={key}
                href={
                  listing.social_links[key] !== undefined
                    ? listing.social_links[key]
                    : ""
                }
                className={"px-4"}
              >
                <Image
                  src={`/${key}.svg`}
                  alt={`${key} Logo`}
                  width={LOGO_WIDTH}
                  height={LOGO_HEIGHT}
                />
              </Link>
            ))}
        </div>
      </div>
      {/* TODO:This needs to be hooked up to the Community size property of the listing so it reflects the correct size  */}

      <section className="bg-primary-dark md:flex text-center justify-between p-3 px-10">
        <span className="flex items-center justify-between">
          <Image
            src="/Vector.png"
            alt="user icon"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
          />
          <p className="text-white text-sm pl-3">Number of members</p>
        </span>
        <div>
          <span className="bg-secondary text-primary-dark rounded-2xl py-1 px-3 mr-6">
            1-199
          </span>
          <span className="bg-gray-lite text-grey-dark rounded-2xl py-1 px-3 mr-6">
            200-299
          </span>
          <span className="bg-gray-lite text-grey-dark rounded-2xl py-1 px-3 mr-6">
            300-499
          </span>
          <span className="bg-gray-lite text-grey-dark rounded-2xl py-1 px-3">
            500
          </span>
        </div>
      </section>
    </header>
  );
};

export default CommunityHeader;
