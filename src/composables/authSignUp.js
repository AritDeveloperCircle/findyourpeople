import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth, firebaseDb } from "@/firebase/config";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useAuthContext } from "@/context/reducer";

function useAuthSignUp() {
const {dispatch} = useAuthContext()
  const [firebaseError, setFirebaseError] = useState("");

  const signup = ({ name, email, password }) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName: name })
          .then(() => {
            const userDocRef = doc(firebaseDb, "MANAGERS", user.uid);
            const userData = {
              displayName: user.displayName,
              email: user.email,
              userid: user.uid,
            };
           
            setDoc(userDocRef, userData);
             dispatch({ type: "SIGN_IN", payload: userData });
          })
          .catch((error) => {
            setFirebaseError(error.message);
            console.log(error.message);
          });
      })
      .catch((error) => {
        setFirebaseError(error.message);
        console.log(error.message);
      });
  };

  return { signup, firebaseError };
}

export { useAuthSignUp };
