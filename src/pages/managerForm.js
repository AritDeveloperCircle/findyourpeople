import { useState} from "react";
import React from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/Header/NavBar";
import CustomizableButton from "@/components/common/CustomizableButton";
import FooterBar from "@/components/common/FooterBar";
import styles from "../styles/managerForm.module.css";
import { firebaseDb} from "@/firebase/config";
import {collection, addDoc} from "firebase/firestore";
import useAuthContext from "@/context/useAuthContext";



function ManagerForm() {
  const {state} = useAuthContext();
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
     `${state?.user?.userid}`,
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
      <form className="px-4 p-2" onSubmit={submitCommunity}>
        <div  className='grid'>
          {inputFields.map((field) => (
            <div key={field.name} className="mb-4">
              <label className="ml-2 font-bold text-xl leading-9 text-gray-dark " htmlFor={field.name}>
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
                className="border-2 px-2 p-2 block w-full border-gradient-lite-grey rounded-lg"
                placeholder={field.placeholder}
                pattern={field.pattern}
              />
            </div>
          ))}
        </div>
        

        <div className="flex justify-center items-center">

          <button
            className="px-2 font-bold text-lg border text-primary border-primary rounded-lg  "
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
