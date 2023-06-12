import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { firebaseDb } from "@/firebase/config";

export function useCollection() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = (query, data) => {
    if (query.length > 3) {
      const array = data.filter((doc) => {
        return doc.community_name === query;
      });
      console.log(array);
      setData(array);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const queryManagersRef = collection(firebaseDb, "MANAGERS");
    let communityArray = [];

    const querySnapshot = onSnapshot(
      queryManagersRef,
      (snap) => {
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
              ...community.data(),
              uid: manager.id,
              community_id: community.id,
            });
          });
          setData([...communityArray]);
          setIsLoading(false);
          setError(null);
        });
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
      }
    );
    return () => querySnapshot;
  }, []);
  return { data, error, isLoading, fetchData };
}
