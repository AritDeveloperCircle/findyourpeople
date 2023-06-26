import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { firebaseDb } from "@/firebase/config";
import useAuthContext from "@/context/useAuthContext";

function useManagerCollection() {
  const [listings, setListings] = useState([]);
  const { state } = useAuthContext();
  useEffect(() => {
    if (state?.user?.userid !== "") {
      const communityRef = collection(
        firebaseDb,
        "MANAGERS",
        `${state?.user?.userid}`,
        "MANAGER_LISTINGS"
      );
      if (communityRef) {
        const unsub = onSnapshot(communityRef, (snap) => {
          let communityArray = [];
          snap.forEach((community) => {
            if (community.data().approved) {
              communityArray.push({
                ...community.data(),
                uid: state?.user?.userid,
                community_id: community.id,
              });
            }
          });
          setListings([...communityArray]);
        });
        return () => unsub();
      }
    }

  }, [state?.user?.userid]);
  return { listings };
}

export default useManagerCollection;
