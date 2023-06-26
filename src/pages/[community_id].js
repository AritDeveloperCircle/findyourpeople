import Link from "next/link";
import NavBar from "@/components/Header/NavBar";
import FooterBar from "@/components/common/FooterBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firebaseDb } from "@/firebase/config";
import CommunityHeader from "@/components/landing/CommunityListingHeader";
import ListingDetails from "@/components/landing/ListingDetails";
import { useCollection } from "@/hook/useCollection";

function SingleListing(className, text) {
  const router = useRouter();
  const id = router?.query?.community_id;
  const title = router?.query?.title;
  const [listing, setListing] = useState();
  const { data, error, isLoading } = useCollection();

  useEffect(() => {
    const fetchData = async () => {
      const d = data.filter((data) => data.community_id == id);
      setListing(d[0]);
    };

    if (id && data.length > 0) {
      fetchData();
    }
  }, [id, listing, data]);

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
