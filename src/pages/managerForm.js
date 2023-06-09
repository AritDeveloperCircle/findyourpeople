import { useState, useRef } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/Header/NavBar";
import CustomizableButton from "@/components/common/CustomizableButton";
import FooterBar from "@/components/common/FooterBar";
import {
  imageUpload,
  uploadFile,
  deleteFile,
  resetInput,
  goHome,
} from "@/composables/helperFile";
import styles from "../styles/managerForm.module.css";
import { firebaseDb, firebaseStorage, firebaseAuth } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import useAuthContext from "@/context/useAuthContext";
import { signOut } from "firebase/auth";

function ManagerForm() {
  const initialFormData = {
    community_name: "",
    community_manager: "",
    community_location: "",
    community_url: "",
    manager_linkedin: "",
    manager_twitter: "",
    community_date: "",
    community_vision: "",
    community_description: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  const [fileUpload, setFileUpload] = useState();
  const router = useRouter();
  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const inputFields = [
    {
      name: "community_name",
      label: "Community Name",
      type: "text",
      required: true,
    },
    {
      name: "community_manager",
      label: "Community Manager",
      type: "text",
      required: true,
    },
    {
      name: "community_url",
      label: "Community URL",
      type: "url",
      placeholder: "https://example.com",
      pattern: "https://.*",
      required: true,
    },
    {
      name: "manager_linkedin",
      label: "Manager Linkedin",
      type: "text",
      required: false,
    },
    {
      name: "manager_twitter",
      label: "Manager Twitter",
      type: "text",
      required: false,
    },
    {
      name: "community_date",
      label: "Community Start Date",
      type: "text",
      required: false,
    },
    {
      name: "community_vision",
      label: "Community Vision",
      type: "textarea",
      minLength: 15,
      maxLength: 300,
      rows: 3,
      required: false,
    },
    {
      name: "community_description",
      label: "Community Description",
      type: "textarea",
      minLength: 15,
      maxLength: 300,
      rows: 3,
      required: true,
    },
  ];
  const submitCommunity = async (event) => {
    event.preventDefault();
    const commCollectionRef = collection(
      firebaseDb,
      "MANAGERS",
      "3fF17YaSFLHgRgksgVU8",
      "MANAGER_LISTINGS"
    );
    await addDoc(commCollectionRef, {
      formData,
    }).then(() => {
      setFormData(initialFormData);
    });
    alert(
      "Listing created! FindYourPeople Admins will review your listing and approve if it meets our guidelines. Thank you!"
    );
  };

  return (
    <div className="overflow-y-hidden grid place-items-stretch w-[90rem] max-h-[132rem] lg:w-auto">
      <NavBar />
      <h1 className="bg-gradient-lite-blue h-20 md:h-24 w-[90rem] lg:w-auto flex flex-col justify-center items-center px-3.5 py-14 gap-2.5 font-bold text-4xl text-gray-lite">
        New Community
      </h1>
      <form onSubmit={submitCommunity} action="/send-data-here" method="POST">
        <container className={styles.communityLayout}>
          {inputFields.map((field) => (
            <div className={styles.layoutRow} key={field.name}>
              <label
                className="ml-2 font-bold text-xl leading-9 text-gray-dark w-52 h-9 md:w-64"
                htmlFor={field.name}
              >
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                className="border-2 w-80 grid md:max-w-md h-9 border-gradient-lite-grey rounded-lg ms-0"
                placeholder={field.placeholder}
                pattern={field.pattern}
              />
            </div>
          ))}
        </container>

        <div className="px-36 py-3 flex flex-row justify-center items-center">
          <button
            className="w-44 sm:w-64 h-9 sm:h-14 px-2 font-bold text-lg border text-primary border-primary rounded-lg"
            onClick={() => router.push("/")}
            text="Return to Home"
            type="submit"
          >
            Return to Home
          </button>
          <CustomizableButton
            customClass={styles.communityBottomButtons}
            onClick={submitCommunity}
            text="Submit"
            type="submit"
          />
        </div>
      </form>
      <FooterBar />
    </div>
  );
}

export default ManagerForm;
