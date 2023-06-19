import { useState, useRef } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import NavBar from "@/components/Header/NavBar";
import CustomizableButton from "@/components/common/CustomizableButton";
import FooterBar from "@/components/common/FooterBar";
import { imageUpload, uploadFile, deleteFile, resetInput, goHome } from "@/pages/helperFile";
import styles from "../styles/managerForm.module.css";
import { firebaseDb, firebaseStorage } from "@/firebase/config";
import {collection, addDoc} from "firebase/firestore";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";


function ManagerForm() {
  const initialFormData = {
    community_name: "",
    community_manager: "",
    community_location: "",
    manager_url: "",
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
      required: false,
    },
    {
      name: "manager_url",
      label: "Manager URL",
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
      label: "Community Date",
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
    }
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
  };
  
  return (
    <div className="">
      <NavBar />
      <h1 className="bg-gradient-lite-blue h-20 md:h-24 w-auto md:w-full flex flex-col justify-center items-center px-3.5 py-14 gap-2.5 font-bold text-4xl text-gray-lite">New Community</h1>
      <form className="" onSubmit={submitCommunity} action="/send-data-here" method="POST">
        <container  className={styles.communityLayout}>
          {inputFields.map((field) => (
            <div key={field.name}>
              <label className="ml-2 font-bold text-xl leading-9 text-gray-dark w-52 h-9 md:w-64" htmlFor={field.name}>
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
                className="border-2 w-72 md:max-w-md h-11 border-gradient-lite-grey rounded-lg"
                placeholder={field.placeholder}
                pattern={field.pattern}
              />
            </div>
          ))}
        </container>
        <section className={styles.imageUploadBackground}>
          <div  className="bg-primary-lite lg:place-content-center max-w-7xl md:max-w-screen-2xl max-h-96 rounded-2xl" >
            <h3 className="w-32  font-sans h-9 ml-64 pt-4 font-bold text-xl leading-9 text-gray-dark ">Add Image</h3>
            <div
              onChange={(event) => {
                setFileUpload(event.target.files[0]);
              }}
              onClick={imageUpload}
              className="rounded-lg border-grey-dark border-dashed border-2 md:mx-64 sm:mx-4 mt-2 h-24 max-w-lg sm:max-w-full flex justify-between flex-col items-center"
            >
              <input
              className="pt-4"
                type="file"
                id="myImage"
                name="myImage"
                ref={fileInputRef}
                onChange={(event) => {
                  setFileUpload(event.target.files[0]);
                }}
              />
              <label className="pb-2 font-bold text-2xl leading-9" htmlFor="myImage">Upload a File</label>
            </div>
            <div className={styles.lowerFormIcons}>
              <div
                onClick={uploadFile}
                onChange={(event) => {
                  setFileUpload(event.target.files[0]);
                }}
              >
                <input className="mb-6 font-bold" type="submit" />
                <Image
                  src="/uploadFile.png"
                  height={20}
                  width={20}
                  alt="file upload icon"
                  type="submit"
                  className="mb-6"
                />
              </div>
              <div className="mb-6" onClick={deleteFile}>
                <p className="w-21 h-9 text-xl leading-9 font-bold text-accent-red">Remove</p>
                <Image
                  src="/delete-bin-2-line.png"
                  height={20}
                  width={20}
                  alt="file upload icon"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="px-36 py-3 flex flex-row justify-center items-center">
        <div className={styles.buttonsBottom}>
          <button
            className="w-44 sm:w-64 h-9 mt-8 sm:h-14 px-2 font-bold text-lg border text-primary border-primary rounded-lg  "
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
        </div>
      </form>
      <FooterBar />
    </div>
  );
}

export default ManagerForm;
