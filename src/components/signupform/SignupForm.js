import { useState } from "react";
import CustomizableButton from "../common/CustomizableButton";
import styles from "./signupform.module.css";
import { useAuthSignUp } from "@/composables/authSignUp";
import regexValidation from "./helperFunctions/regexValidation";

function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { addUser, signup } = useAuthSignUp();
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = regexValidation(user);

    if (Object.keys(errors).length === 0) {
      signup(user);

      setTimeout(() => {
        resetForm();
      }, 1000);
    } else {
      setError(errors);
    }
  };

  const resetForm = () => {
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* name */}
        <div className={styles.formRow}>
          <label htmlFor="name" className={styles.formLabel}>
            Name<span>*</span>
          </label>
          <input
            type="text"
            className={styles.formInput}
            id="name"
            name="name"
            aria-label="name"
            value={user.name}
            onChange={handleChange}
            required
          />
          {error.name && (
            <span className="text-red-800 text-xs"> {error.name} </span>
          )}
        </div>
        {/* email */}
        <div className={styles.formRow}>
          <label htmlFor="email" className={styles.formLabel}>
            Email<span>*</span>
          </label>
          <input
            type="email"
            className={styles.formInput}
            id="email"
            name="email"
            aria-label="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          {error.email && (
            <span className="text-red-800 text-xs"> {error.email} </span>
          )}
        </div>
        {/* password */}
        <div className={styles.formRow}>
          <label htmlFor="password" className={styles.formLabel}>
            Password<span>*</span>
          </label>
          <input
            type="password"
            className={styles.formInput}
            id="password"
            name="password"
            aria-label="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          {error.password && (
            <span className="text-red-800 text-xs"> {error.password} </span>
          )}
        </div>
        <CustomizableButton
          customClass={styles.btn}
          text="SIGN UP"
          aria-label="Sign up button"
        />
      </form>
    </div>
  );
}

export default Form;
