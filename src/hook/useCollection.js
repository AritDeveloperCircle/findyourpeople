import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { firebaseDb } from "@/firebase/config";

export function useCollection() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const queryManagersRef = collection(firebaseDb, "MANAGERS");
    const querySnapshot = onSnapshot(
      queryManagersRef,
      (snap) => {
        let communityArray = [];
        snap.forEach(async (manager) => {
          const communityRef = collection(
            firebaseDb,
            "MANAGERS",
            manager.id,
            "MANAGER_LISTINGS"
          );
          const docSnap = await getDocs(communityRef);
          docSnap.forEach((community) => {
            communityArray.push({
              coummunit: community.data(),
              community_id: community.id,
            });
          });
          setData(communityArray);
          setError(null)
        });
      },
      (err) => {
        setError(err.message);
        setIsLoading(false)
      }
    );
    setIsLoading(false);
    return () => querySnapshot;
  }, []);
  return { data, error, isLoading };
}
