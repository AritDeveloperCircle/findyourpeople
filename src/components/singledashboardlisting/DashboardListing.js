import Image from "next/image";
import styles from "./dashboardlisting.module.css";
import CustomizableButton from "../common/CustomizableButton";


function DashboardListing({coummnity}) {
  return (
    <main className={`bg-white py-4 rounded-lg shadow-md col-span-1 p-2`}>
      <div>
        <Image
          src="/background.png"
          className={styles.img}
          height={100}
          width={100}
          alt="community photo"
        />
      </div>
      <div>
        <p className='mb-3'>
          Community Name: <span>Approved</span>
        </p>
        <div className={`flex items-center justify-center gap-4 mb-2`}>
          <CustomizableButton customClass={styles.edit} text="Edit Page" />
          <CustomizableButton customClass={styles.view} text="View Page" />
        </div>
        <CustomizableButton customClass={styles.unpublish} text="UNPUBLISH" />
        <CustomizableButton customClass={styles.delete} text="DELETE" />
      </div>
    </main>
  );
}

export default DashboardListing;
