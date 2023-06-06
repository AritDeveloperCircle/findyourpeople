import {
  createUserWithEmailAndPassword,
  updateProfile,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { firebaseAuth, firebaseDb } from "@/firebase/config";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

function useAuthSignUp() {
  const [addUser, setAddUser] = useState("");
  const [firebaseError, setFirebaseError] = useState("");

  const signup = ({ name, email, password }) => {
    fetchSignInMethodsForEmail(firebaseAuth, email)
      .then((signInMethods) => {
        // I was trying to catch the email error here, but I already have in place using the firebaseError
        if (signInMethods.length > 0) {
          setFirebaseError("Email is already in use.");
        } else {
          createUserWithEmailAndPassword(firebaseAuth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              updateProfile(user, { displayName: name })
                .then(() => {
                  const userDocRef = doc(firebaseDb, "MANAGERS", user.uid);
                  const userData = {
                    displayName: user.displayName,
                    email: user.email,
                  };
                  return setDoc(userDocRef, userData);
                })
                .then(() => {
                  setAddUser(user);
                })
                .catch((error) => {
                  setFirebaseError(error.message);
                });
            })
            .catch((error) => {
              setFirebaseError(error.message);
            });
        }
      })
      .catch((error) => {
        setFirebaseError(error.message);
      });
  };

  return { addUser, signup, firebaseError };
}

export { useAuthSignUp };
