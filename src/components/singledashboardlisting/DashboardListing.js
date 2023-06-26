import Image from "next/image";
import styles from "./dashboardlisting.module.css";
import CustomizableButton from "../common/CustomizableButton";


function DashboardListing({community}) {
  return (
    <main className={`bg-white py-4 rounded-lg shadow-md col-span-1 p-2`}>
      <div>
        <p className='mb-3'>
          {community.community_name}: {community.approved ? "Approved" : "Pending"}
        </p>
        <div className={`flex items-center justify-center gap-4 mb-2`}>
          <CustomizableButton customClass={styles.view} text="View Page" />
        </div>
        <CustomizableButton customClass={styles.delete} text="DELETE" />
      </div>
    </main>
  );
}

export default DashboardListing;
