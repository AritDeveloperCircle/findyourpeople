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
    community_date: "",
    community_location: "",
    community_url: "",
    community_linkedin: "",
    community_twitter: "",
    community_facebook: "",
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
    // if (formRef.current) {
    //   formRef.current.reset();
    // }
  };
  
  

  return (
    <div>
      <NavBar />
      <h1 className={styles.firstBanner}>New Community</h1>
      <form onSubmit={submitCommunity} action="/send-data-here" method="POST">
        <container className={styles.communityLayout}>
          {inputFields.map((field) => (
            <div className={styles.layoutRow} key={field.name}>
              <label htmlFor={field.name}>
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
                className={styles.inputStyle}
                placeholder={field.placeholder}
                pattern={field.pattern}
              />
            </div>
          ))}
        </container>

        <section className={styles.imageUploadBackground}>
          <div className={styles.uploadFileBackground}>
            <h3>Add Image</h3>
            <div
              onChange={(event) => {
                setFileUpload(event.target.files[0]);
              }}
              onClick={imageUpload}
              className={styles.inputUploadFile}
            >
              <input
                type="file"
                id="myImage"
                name="myImage"
                ref={fileInputRef}
                onChange={(event) => {
                  setFileUpload(event.target.files[0]);
                }}
              />
              <label htmlFor="myImage">Upload a File</label>
            </div>
            <div className={styles.lowerFormIcons}>
              <div
                onClick={uploadFile}
                onChange={(event) => {
                  setFileUpload(event.target.files[0]);
                }}
              >
                <input className={styles.submitFileButton} type="submit" />
                <Image
                  src="/uploadFile.png"
                  height={20}
                  width={20}
                  alt="file upload icon"
                  type="submit"
                />
              </div>
              <div className={styles.trashIcon} onClick={deleteFile}>
                <p className={styles.deleteText}>Remove</p>
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

        <div className={styles.buttonsBottom}>
          <button
            className={styles.returnButton}
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
