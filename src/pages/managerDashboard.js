import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useAuthContext from "@/context/useAuthContext";
const ManagerDashboard = () => {
  const { state } = useAuthContext();
  const  router = useRouter();

  useEffect(() => {
    if (state?.user ===undefined || state?.user?.uid === "") {
    router.push("/");
    }
 
  },);
  return <div>managerDashboard</div>;
};

export default ManagerDashboard;
