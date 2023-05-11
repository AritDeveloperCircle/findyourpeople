import Image from "next/image";
import styles from "./managersinglecomm.module.css";
import CustomizableButton from "../common/CustomizableButton";

function DashboardListing({ customClass }) {
  return (
    <main className={styles.card}>
      <div className={styles.imgContainer}>
        <Image
          src="/background.png"
          className={styles.img}
          height={100}
          width={100}
          alt="community photo"
        />
      </div>
      <div className={styles.cardBody}>
        <p className={customClass}>
          Community Name: <span>Approved</span>
        </p>
        <div className={styles.ctaButtons}>
          <CustomizableButton customClass={styles.edit} text="Edit Page" />
          <CustomizableButton customClass={styles.view} text="View Page" />
        </div>
        <CustomizableButton customClass={styles.delete} text="DELETE" />
      </div>
    </main>
  );
}

export default ManagerSingleCommunity;
