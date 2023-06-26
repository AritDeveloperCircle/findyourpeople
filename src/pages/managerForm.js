import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import CustomizableButton from "@/components/common/CustomizableButton";
import FooterBar from "@/components/common/FooterBar";
import styles from "../styles/managerForm.module.css";
import { firebaseDb } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import useAuthContext from "@/context/useAuthContext";
import Link from "next/link";

function ManagerForm() {
  const { state } = useAuthContext();
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
    },
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
      <header className="flex items-center justify-between px-4 py-4">
        <h1>Findyourpeople.tech</h1>
        <ul className="flex items-center gap-2">
          <li>
            <Link href="/managerDashboard">Back to Dashboard</Link>
   
          </li>
          <li className="bg-yellow-200 px-4 py-2 rounded">
            <button>logout</button>
          </li>
        </ul>
      </header>
      <h1 className="bg-gradient-lite-blue text-center py-4  font-bold text-4xl text-gray-lite">
        New Community
      </h1>
      <form className="px-4 p-2" onSubmit={submitCommunity}>
        <div className="grid lg:grid-cols-3 lg:gap-4">
          {inputFields.map((field) => (
            <div key={field.name} className="mb-4">
              <label
                className="ml-2 font-bold text-xl leading-9 text-gray-dark "
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
                className="border-2 px-2 p-2 block w-full border-gradient-lite-grey rounded-lg"
                placeholder={field.placeholder}
                pattern={field.pattern}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 my-4">
          <button
            className="cusor-pointer px-2 py-1 font-bold text-lg border text-primary border-primary rounded-lg  "
            onClick={() => router.push("/")}
            text="Return to Home"
            type="submit"
          >
            Return to Home
          </button>
          <CustomizableButton
            customClass={styles.submitButton}
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
