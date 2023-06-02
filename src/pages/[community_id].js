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
import CommunityHeader from "@/components/landing/CommunityListingHeader";

function SingleListing(className, text) {
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
      <CommunityHeader listing={listing} />

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
