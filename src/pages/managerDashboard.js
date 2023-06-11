import React from "react";

import useAuthContext from "@/context/useAuthContext";
import Link from "next/link";
const ManagerDashboard = () => {
  const { state } = useAuthContext();

  return (
    <div>
      {state?.user === undefined || state?.user?.uid === "" ? (
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
      ) : (
        <h1>Manager Dashboard</h1>
      )}
    </div>
  );
};

export default ManagerDashboard;
