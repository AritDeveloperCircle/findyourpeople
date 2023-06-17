import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firebaseDb } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import useAuthContext from "@/context/useAuthContext";
import { useRouter } from "next/router";

function useAuthLogIn() {
  const { dispatch } = useAuthContext();
  const router = useRouter();

  const [firebaseError, setFirebaseError] = useState("");
  const LogIn = ({ email, password }) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(async (userCredential) => {
        const docRef = doc(firebaseDb, "MANAGERS", userCredential?.user?.uid);
        const docSnap = await getDoc(docRef);
        dispatch({ type: "SIGN_IN", payload: docSnap.data()});
        router.push("/managerDashboard");
      })
      .catch((error) => {
        setFirebaseError(error.message);
        console.log(error.message);
      });
  };
  return { firebaseError, LogIn };
}

export { useAuthLogIn };
