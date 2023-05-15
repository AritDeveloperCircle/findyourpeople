import { useState } from "react";
import CustomizableButton from "../common/CustomizableButton";
import styles from "./signupform.module.css";
import { useAuthSignUp } from "@/composables/authSignUp";

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

    if (validateForm()) {
      signup(user);

      setTimeout(() => {
        resetForm();
      }, 1000);
    }
  };

  const resetForm = () => {
    setUser({ name: "", email: "", password: "" });
  };

  // Validate Submit Form
  const validateForm = () => {
    const errors = {};

    // Validate Name
    const namePattern = /^[a-zA-Z]{2,50}(?:\s+[a-zA-Z]{2,50})+$/;
    if (!user.name) {
      errors.name = "Please enter your name";
    } else if (user.name.length < 2 || user.name.length > 50) {
      errors.name = "Name must be between 2 and 50 characters";
    } else if (!user.name.match(namePattern)) {
      errors.name = "Please enter a valid name";
    }

    // Valid Email
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!user.email) {
      errors.email = "Please enter your email address";
    } else if (!user.email.match(emailPattern)) {
      errors.email = "Please enter a valid email address";
    }

    // Valid Password
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
    if (!user.password) {
      errors.password = "Please enter a password";
    } else if (user.password.length < 8 || user.password.length > 20) {
      errors.password = "Please enter a password between 8 and 20 characters";
    } else if (!user.password.match(passwordPattern)) {
      errors.password =
        "Password must contain one digit, one lowercase letter, one uppercase letter, and one special character";
    }

    setError(errors);

    return Object.keys(errors).length === 0;
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
