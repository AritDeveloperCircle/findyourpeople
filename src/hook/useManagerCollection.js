import { useEffect, useState } from "react";
import { collection, getDocs,doc,getDoc, onSnapshot } from "firebase/firestore";
import { firebaseDb } from "@/firebase/config";
import useAuthContext from "@/context/useAuthContext";

function useManagerCollection() {
    const [listings, setListings] = useState([]);
    const { state, dispatch } = useAuthContext();
     useEffect(() => {
       const fetchData = async () => {
       
         const communityRef = collection(
           firebaseDb,
           "MANAGERS",
           state?.user?.userid,
           "MANAGER_LISTINGS"
         );
        
         const docSnap = await getDocs(communityRef); 
         console.log("docSnap", docSnap.empty);   
         if (!docSnap.empty) {   
           let communityArray = [];
           docSnap.forEach((community) => {
             if (community.data().approved) {
               communityArray.push({
                 ...community.data(),
                 uid: state?.user?.userid,
                 community_id: community.id,
               });
             }
           });
           setListings([...communityArray]);
           console.log("Document data:", communityArray);
         }else{
              console.log("No such document!");
         }
       };
       fetchData();
     }, [state?.user?.userid]);
     return { listings };
}

export default useManagerCollection;