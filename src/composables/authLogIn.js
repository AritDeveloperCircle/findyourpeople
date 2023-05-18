import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "@/firebase/config";
import { useState } from "react";



function useAuthLogIn() {

    const [addUser, setAddUser] = useState("");
    const [firebaseError, setFirebaseError] = useState("")

    const LogIn = ({  email, password }) => {
      signInWithEmailAndPassword(firebaseAuth, email, password)
          .then((userCredential) => {
            setAddUser(userCredential.user)
            //  Handle successful login
            // console.log("user signed in", userCredential)
            // reset form field or log in
        
          })
          
          .catch((error) => {
            setFirebaseError(error.message)
        });
    };
  
    return { addUser, firebaseError, LogIn };
  }




export { useAuthLogIn };


