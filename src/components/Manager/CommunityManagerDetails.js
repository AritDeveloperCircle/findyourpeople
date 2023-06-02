import CustomizableButton from "../common/CustomizableButton";
import CustomizableAvatar from "../common/customavatar/CustomizableAvatar";
import Image from "next/image";
import { useState } from "react";

const CommunityManagersDetails = () => {
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);
  const Avatar_Height = 100;
  const Avatar_Width = 100;

  const editForm = (
    <form>
      <input type="text" name="nameOfUser" placeholder="username" />
      <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
      <label htmlFor="profilePhotoInput"></label>
      <CustomizableButton
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
