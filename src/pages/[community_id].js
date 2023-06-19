import Link from "next/link";
import NavBar from "@/components/Header/NavBar";
import FooterBar from "@/components/common/FooterBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firebaseDb } from "@/firebase/config";
import CommunityHeader from "@/components/landing/CommunityListingHeader";
import ListingDetails from "@/components/landing/ListingDetails";

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
      <ListingDetails listing={listing} />

      <FooterBar />
    </>
  );
}

export default SingleListing;
