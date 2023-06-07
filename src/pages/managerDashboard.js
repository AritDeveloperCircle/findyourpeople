import React, { useEffect } from "react";
import { useAuthContext } from "@/context/reducer";
import { useRouter } from "next/router";
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
