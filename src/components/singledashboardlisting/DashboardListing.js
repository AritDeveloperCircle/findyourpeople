import styles from "./dashboardlisting.module.css";
import CustomizableButton from "../common/CustomizableButton";
import { doc, deleteDoc } from "firebase/firestore";
import { firebaseDb } from "@/firebase/config";
import useAuthContext from "@/context/useAuthContext";

function DashboardListing({ community }) {
  const { state } = useAuthContext();
  const deleteCommunity = async (e) => {
    e.preventDefault();
 
    const communityRef = doc(
      firebaseDb,
      "MANAGERS",
      state?.user?.userid,
      "MANAGER_LISTINGS",
      community.community_id
    );
    console.log("communityRef", communityRef);
    await deleteDoc(communityRef);
  };
  return (
    <main className={`bg-white py-4 rounded-lg shadow-md col-span-1 p-2`}>
      <div>
        <p className="mb-3">
          <span className="capitalize">{community.community_name}:</span>{" "}
          {community.approved ? (
            <span className="text-accent-green">Approved</span>
          ) : (
            "Pending"
          )}
        </p>
        <div className={`flex items-center justify-center gap-4 mb-2`}>
          <CustomizableButton customClass={styles.view} text="View Page" />
        </div>
        <CustomizableButton
          onClickProp={deleteCommunity}
          customClass={styles.delete}
          text="Delete Page"
        />
      </div>
    </main>
  );
}

export default DashboardListing;
