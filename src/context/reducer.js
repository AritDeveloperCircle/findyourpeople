import { createContext, useEffect, useReducer } from "react";

import { firebaseAuth, firebaseDb } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const InitialState = {
  user: {
    uid: "",
    email: "",
    displayName: "",
  },
  authState: false,
};

export const authReducer = ( state, action) => {
  if (action.type === "SIGN_IN") {
    return {
      ...state,
      user: action.payload,
    };
  }
  if (action.type === "LOG_IN") {
    return {
      ...state,
      user: action.payload,
    };
  }
  if (action.type === "SIGN_OUT") {
    return {
      ...state,
      user: null,
    };
  }
  if (action.type === "AUTH_STATE_CHANGED") {
    return {
      ...state,
      authState: true,
      user: action.payload,
    };
  }
  return state;
};
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, InitialState);

  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        const docRef = doc(firebaseDb, "MANAGERS", user.uid);
        const docSnap = await getDoc(docRef);
        dispatch({
          type: "AUTH_STATE_CHANGED",
          payload: docSnap.data(),
        });
      } else {
        dispatch({
          type: "AUTH_STATE_CHANGED",
          payload: null,
        });
      }
    });
    unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
