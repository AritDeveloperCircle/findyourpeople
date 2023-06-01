import Link from "next/link";
import NavBar from "@/components/Header/NavBar";
import CustomizableAvatar from "@/components/common/customavatar/CustomizableAvatar";
import CustomizableButton from "@/components/common/CustomizableButton";
import FooterBar from "@/components/common/FooterBar";
import styles from "@/styles/singleListing.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firebaseDb } from "@/firebase/config";

function SingleListing(className, text) {
  const photo = "/community dashoard  img 1.jpg";
  const Manager_Avatar = "/avarar 1.png";
  const AVATAR_WIDTH = 50;
  const AVATAR_HEIGHT = 50;
  const SmallAvatar_WIDTH = 20;
  const SmallAvatar_HEIGHT = 20;
  const LOGO_WIDTH = 20;
  const LOGO_HEIGHT = 20;

  const router = useRouter();
  const id = router?.query?.community_id;
  const title = router?.query?.title;
  const [listing, setListing] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        collection(firebaseDb, "MANAGERS", title, "MANAGER_LISTINGS")
      );

      querySnapshot.forEach((doc) => {
        if (doc.id === id) {
          setListing(doc.data());
        }
      });
    };
    if (id) {
      fetchData();
    }
  }, [id, listing, title]);

  return (
    <>
      <NavBar />
      <header className="">
        <div className=" bg-primary-lite p-5 md:flex lg:flex items-center justify-between px-10">
          <article className="flex items-center pb-4">
            <CustomizableAvatar
              src={photo}
              width={AVATAR_WIDTH}
              height={AVATAR_HEIGHT}
              avatarImage={"rounded-full"}
              avatarCustomClass={"mx-2"}
            />
            <h1 className="text-grey-dark text-xl font-medium capitalize">
              {listing?.community_name}
            </h1>
          </article>

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

            <Link
              href={
                listing?.social_links?.twitter !== undefined
                  ? listing?.social_links?.twitter
                  : ""
              }
              className={"px-4"}
            >
              <Image
                src="/twitter.svg"
                alt="Twitter Logo"
                width={LOGO_WIDTH}
                height={LOGO_HEIGHT}
              />
            </Link>
            <Link href={"#"}>
              <Image
                src="/facebook-logo-2019.svg"
                alt="Facebook Logo"
                width={LOGO_WIDTH}
                height={LOGO_HEIGHT}
              />
            </Link>
          </div>
        </div>

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

      <div className={styles.overallContainer}>
        <container>
          <CustomizableAvatar
            Image
            className={"style.image"}
            src={"/mainAvatar.png"}
            height={"50"}
            width={"50"}
            alt={"avatar image"}
          />
          <div>
            <h3>Community Name</h3>
            <h3>Community Manager</h3>
          </div>
          <h3>Number of members</h3>
        </container>

        <container>
          <CustomizableButton text={"Community Vision"} />
          <CustomizableButton text={"Community Description"} />
        </container>

        <h3>Labels</h3>
        <div>
          <CustomizableButton text={"Gender"} />
          <CustomizableButton text={"Industry"} />
        </div>

        <h3>
          <Link href={"#"}>Website URL</Link>
        </h3>
      </div>

      <FooterBar />
    </>
  );
}

export default SingleListing;
