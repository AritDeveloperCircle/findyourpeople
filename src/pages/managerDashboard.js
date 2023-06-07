import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useAuthContext from "@/context/useAuthContext";
const ManagerDashboard = () => {
  const { state } = useAuthContext();
  const { router } = useRouter();

  useEffect(() => {
    if (state?.user?.uid.length <= 0) {
      router.push("/login");
    }
  });
  return <div>managerDashboard</div>;
};

export default ManagerDashboard;
