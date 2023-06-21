import React from "react";
import Link from "next/link";
import useAuthContext from "@/context/useAuthContext";
import { firebaseAuth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
const ManagerDashboard = () => {
  const { state, dispatch } = useAuthContext();
  const router = useRouter();

  const logout = () => {
    signOut(firebaseAuth).then(() => {
      // Sign-out successful.
      dispatch({ type: "LOGOUT" });
      router.push("/");
    });
  };
  return (
    <div>
      {!state.authState && (
        <div className="flex items-center justify-center h-36">
          <p className="text-center">loading...</p>
        </div>
      )}
      {state?.user?.useruid === "" && state.authState && (
        <>
          <div className="bg-slate-200 h-screen flex items-center justify-center">
            <div className="w-4/12 bg-white p-6 text-center rounded">
              <h1 className="font-medium text-2xl mb-4">Manager Dashboard</h1>
              <p>
                To view this page{" "}
                <Link href="/login" className="text-violet-600">
                  login
                </Link>{" "}
              </p>

              <p>or</p>
              <p>
                Go to community listings page{" "}
                <Link href="/" className="text-violet-600">
                  listings
                </Link>
              </p>
            </div>
          </div>
        </>
      )}
      {state?.user?.useruid !== "" && state.authState && (
        <>
          <h1>Manager Dashboard</h1>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default ManagerDashboard;
