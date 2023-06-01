import CustomizableButton from "../common/CustomizableButton";
import CustomizableAvatar from "../common/customavatar/CustomizableAvatar";
import Image from "next/image";
import { useState } from "react";

const CommunityManagersDetails = () => {
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);
  const Avatar_Height = 100;
  const Avatar_Width = 100;

  const editForm = (
    <form className= "">
      <input type="text" name="nameOfUser" placeholder="username" />
      <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
      <label htmlFor="profilePhotoInput"></label>
      <CustomizableButton
        customClass= ""
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
      <main className= "flex justify-center  items-between mt-[150px]">
        <div className= " flex bg-gradient-lite-grey w-[1000px] justify-between rounded-2xl px-[50px] " >
        <div className= "pt-6 mr-2">
          <h2 className="text-[#031B4E]  font-[600] text-[34px]">Welcome Back, Emmanuel!</h2>
          <p className="text-grey-dark text-opacity-3 font-normal text-lg pt-1">You have 8 new members!</p>
          <CustomizableButton
            customClass= "text-gradient-lite-blue bg-transparent mt-10 font-[600] text-xl"
            text="Edit Profile"
            aria-label="Edit profile button"
            onClickProp={() => handleEdit}
          />
        </div>
        <div className="ml-3">
          <CustomizableAvatar
            height= "300"
            width= "400"
            src= "/Manager dashboard flat character.png"
          />
        </div>
        </div>
      </main>
    </>
  );
};

export default CommunityManagersDetails;
