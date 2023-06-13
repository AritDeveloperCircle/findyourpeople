import Link from "next/link";
import NavBar from "@/components/Header/NavBar";
import CustomizableAvatar from "@/components/common/customavatar/CustomizableAvatar";
import CustomizableButton from "@/components/common/CustomizableButton";
import FooterBar from "@/components/common/FooterBar";
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


      <div className="bg-gradient-lite-grey flex justify-between p-[52px] mt-12 ">
                  <h2 
                   className ="text-grey-dark text-lg sm:text-lg lg:text-xl font-medium leading-[52px]"               
                  >
                    Would you like to be a part of this community?
                  </h2> 
                <Link 
                href="/" 
                className ="bg-gradient-lite-blue cursor-pointer rounded-md w-[250px] text-center px-6 py-2 text-white shadow-sm hover:bg-indigo-500"
                >
                  Visit Community
                </Link>  
      </div>



      <FooterBar />
    </>
  );
}

export default SingleListing;
