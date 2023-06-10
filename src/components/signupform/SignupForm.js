import { useState } from "react";
import CustomizableButton from "../common/CustomizableButton";
import { useAuthSignUp } from "@/composables/authSignUp";
import regexValidation from "./helperFunctions/regexValidation";
import { useRouter } from "next/router";

function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {  signup, firebaseError } = useAuthSignUp();
  const [error, setError] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = regexValidation(user);
    if (Object.keys(errors).length === 0) {
      signup(user);
<<<<<<< Updated upstream
      router.push("/");
=======
      router.push("/managerDashboard"); 
>>>>>>> Stashed changes
    } else {
      setError(errors);
    }
  };

  return (
<<<<<<< Updated upstream
      <form
        className="container w-full max-w-lg bg-white px-2 rounded-md mx-auto"
        onSubmit={handleSubmit}
      >
        {/* name */}
        <div className="my-6">
          <label
            htmlFor="name"
            className="block text-sm mb-2 capitalize tracking-wide font-medium"
          >
            Name
          </label>
          <input
            type="text"
            className="w-full py-4 px-2 rounded-lg bg-white border border-gray-300"
            id="name"
            name="name"
            aria-label="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
          {error.name && (
            <span className="text-red-800 text-xs"> {error.name} </span>
          )}
        </div>
        {/* email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm mb-2 capitalize tracking-wide font-medium"
          >
            Email Address
          </label>
          <input
            type="email"
            className="w-full py-4 px-2 rounded-lg bg-white border border-gray-300"
            id="email"
            name="email"
            aria-label="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          {error.email && (
            <span className="text-red-800 text-xs"> {error.email} </span>
          )}
          {firebaseError && (
            <span className="text-red-800 text-xs">User already exists </span>
          )}
        </div>
        {/* password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm mb-2 capitalize tracking-wide font-medium"
          >
            Password
          </label>
          <input
            type="password"
            className="w-full py-4 px-2 rounded-lg bg-white border border-gray-300"
            id="password"
            name="password"
            aria-label="password"
            value={user.password}
            onChange={handleChange}
            placeholder="*********"
            required
          />
          {error.password && (
            <span className="text-red-800 text-xs"> {error.password} </span>
          )}
        </div>
        <div className="mb-2">
          <input type="checkbox" name="acceptTerms" id="acceptTerms" required />
          <label htmlFor="acceptTerms" className="ml-2 text-base">
            I accept the <span className="text-primary">Terms of Use</span> &
            <span className="text-primary"> Privacy Policy</span>
          </label>
        </div>
        <CustomizableButton
          customClass="cursor-pointer text-white bg-gradient-to-r from-gradient-lite-blue to-gradient-dark-blue mt-5 border-transparent rounded-lg tracking-wider py-3 px-2 shadow-md transition-all duration-300 ease-in-out  inline-block w-full"
          text="Sign Up"
          aria-label="Sign up button"
        />
      </form>
=======
    <form
      className="container w-full max-w-lg bg-white px-2 rounded-md mx-auto"
      onSubmit={handleSubmit}
    >
      {/* name */}
      <div className="my-6">
        <label
          htmlFor="name"
          className="block text-sm mb-2 capitalize tracking-wide font-medium"
        >
          Name
        </label>
        <input
          type="text"
          className="w-full py-4 px-2 rounded-lg bg-white border border-gray-300"
          id="name"
          name="name"
          aria-label="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
        {error.name && (
          <span className="text-red-800 text-xs"> {error.name} </span>
        )}
      </div>
      {/* email */}
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-sm mb-2 capitalize tracking-wide font-medium"
        >
          Email Address
        </label>
        <input
          type="email"
          className="w-full py-4 px-2 rounded-lg bg-white border border-gray-300"
          id="email"
          name="email"
          aria-label="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        {error.email && (
          <span className="text-red-800 text-xs"> {error.email} </span>
        )}
        {firebaseError && (
          <span className="text-red-800 text-xs">User already exists </span>
        )}
      </div>
      {/* password */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm mb-2 capitalize tracking-wide font-medium"
        >
          Password
        </label>
        <input
          type="password"
          className="w-full py-4 px-2 rounded-lg bg-white border border-gray-300"
          id="password"
          name="password"
          aria-label="password"
          value={user.password}
          onChange={handleChange}
          placeholder="*********"
          required
        />
        {error.password && (
          <span className="text-red-800 text-xs"> {error.password} </span>
        )}
      </div>
      <div className="mb-2">
        <input type="checkbox" name="acceptTerms" id="acceptTerms" required />
        <label htmlFor="acceptTerms" className="ml-2 text-base">
          I accept the <span className="text-primary">Terms of Use</span> &
          <span className="text-primary"> Privacy Policy</span>
        </label>
      </div>
      <CustomizableButton
        customClass="cursor-pointer text-white bg-gradient-to-r from-gradient-lite-blue to-gradient-dark-blue mt-5 border-transparent rounded-lg tracking-wider py-3 px-2 shadow-md transition-all duration-300 ease-in-out  inline-block w-full"
        text="Sign Up"
        aria-label="Sign up button"
      />
    </form>
>>>>>>> Stashed changes
  );
}

export default Form;
