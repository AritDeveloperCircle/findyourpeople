import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firebaseDb } from "@/firebase/config";
import { useState } from "react";
import useAuthContext from "@/context/useAuthContext";

function useAuthLogIn() {
  const { dispatch } = useAuthContext();

  const [firebaseError, setFirebaseError] = useState("");

  const LogIn = ({ email, password }) => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(async (userCredential) => {
        // setAddUser(userCredential.user)
        const docRef = doc(firebaseDb, "MANAGERS", userCredential?.user?.uid);
        const docSnap = await getDoc(docRef);
        dispatch({ type: "SIGN_IN", payload: docSnap.data() });
        //  Handle successful login
      })
      .catch((error) => {
        setFirebaseError(error.message);
      });
  };
  return { firebaseError, LogIn };
}

export { useAuthLogIn };
