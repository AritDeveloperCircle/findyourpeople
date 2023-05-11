import MainAvatar from "/src/images/mainAvatar.png";
import CustomizableAvatar from "../common/customavatar/CustomizableAvatar";
import CustomizableButton from "../common/CustomizableButton";
import styles from "/src/styles/Manager.module.css";
import { useState } from "react";

const CommunityManagersDetails = () => {
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);
  const Avatar_Height = 100;
  const Avatar_Width = 100;

  const editForm = (
    <form className={styles.edit_bio_form}>
      <input type="text" name="nameOfUser" placeholder="username" />
      <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
      <label htmlFor="profilePhotoInput"></label>
      <CustomizableButton
        customClass={styles.edit_btn}
        text="Save Profile"
        aria-label="Update profile button"
      />
    </form>
  );

  const handleEdit = () => {
    setEditFormIsOpen(true);
  };

  return (
    <>
      <main className={styles.manager_details_wrapper}>
        <h2>Welcome Back, XX!</h2>
        <div className={styles.card}>
          <CustomizableAvatar
            height={Avatar_Height}
            width={Avatar_Width}
            src={MainAvatar}
          />
          <p>You have 8 new members!</p>
          <CustomizableButton
            customClass={styles.edit_btn}
            text="Edit Profile"
            aria-label="Edit profile button"
            onClickProp={() => handleEdit}
          />
        </div>
      </main>
    </>
  );
};

export default CommunityManagersDetails;
