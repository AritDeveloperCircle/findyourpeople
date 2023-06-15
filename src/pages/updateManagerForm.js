import Link from "next/link";
// import NavBar from "@/components/Header/NavBar";
// import CustomizableAvatar from "@/components/common/CustomizableAvatar";
// import CustomizableButton from "@/components/common/CustomizableButton";
// import FooterBar from "@/components/common/FooterBar";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { useEffect, useState, useRef } from "react";
// import React from "react";
// import { collection, ref, child, get, onValue, doc, getDoc, query, where, getDocs, docs } from "firebase/firestore";
// import { firebaseDb, firebaseStorage } from "@/firebase/config";
// import { useCollection } from "@/hook/useCollection";
// import CommunityHeader from "@/components/landing/CommunityListingHeader";

function GetDataFirebase() {
    // const [data, setData] = useState([]);
    const db = firebaseDb
    const collectionRef = collection(db, "MANAGER_LISTINGS");
    querySnapshot();
    
    // const snapshots = async () => await getDocs(collectionRef)
    //     .then((snapshot) => {
    //         console.log(snapshots)
    //         let documents = []
    //         snapshot.documents.forEach((doc) => {
    //             documents.push({...documents.data(), id: doc.id })
    //         })
    //         console.log(documents)
    //     })
    //     .catch(error => {
    //         console.log(error.message)
    //     })


    // const snapshot = async () => await collectionRef.where("user", "==", user).get();
    // if (snapshot.empty) {
    //     console.log("No matching documents.");
    //     return;
    // }

    // snapshot.forEach(doc => {
    //     console.log(doc.id, "=>", doc.data())
    // })
    // const q = query(collection(firebaseDb, "id"), where("MANAGERS", "==", true));

    // const querySnapshot = async () => await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data());
    // });



    // const [lists] = useCollection(
    //     firebase.firestore().collection('MANAGERS'),
    //     {}
    // );
    // const docRef = doc(firebaseDb, "MANAGERS");
    // const docSnap = async () => await getDoc(docRef);

    // if(docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    // } else {
    //     console.log("No such document!");
    // }



    // const dbRef = ref(firebaseDb());
    // get(child(dbRef, "MANAGERS/" + id))
    //     .then((snapshot) => {
    //         if(snapshot.exists()) {
    //             console.log(snapshot.val());
    //         } else {
    //             console.log("No data available");
    //         }
    //     }).catch((error) => {
    //         console.error(error);
    //     });



    // useEffect(() => {
    //     const collectionRef = collection(firebaseDb, 'MANAGERS')

    //     // const fetchData = async () => {
    //     //     try {
    //     //         const querySnapshot = await getDocs(collectionRef);
    //     //         const documents = [];
    //     //         querySnapshot.forEach((doc) => {
    //     //             documents.push(doc.data());
    //     //         });
    //     //         setData(documents);
    //     //     } catch(error) {
    //     //     console.error("Error fetching data from Firestore:", error);
    //     //     }
    //     // };
    //     const ref = firebaseDb.collection('MANAGER_LISTINGS').get().then((snapshot) => {
    //         console.log(snapshot.docs)
    //       })
    // fetchData();
    // }, []);
    
    //   }, []);
      return (
        <div>
            
            <h1 class="text-9xl">Data from Firebase:</h1>
            {/* <data.map((item) => {
                <div key={item.id}>
                    <h3>{item.id}</h3>
                    <p>{item.description}</p>
                </div>
            }); */}
          
        </div>
      );
    }
    //   <FooterBar />

export default GetDataFirebase;
