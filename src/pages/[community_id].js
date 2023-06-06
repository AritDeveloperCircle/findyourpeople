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
      <FooterBar />
    </>
  );
}

export default SingleListing;
