import { useState } from "react";
import CustomizableButton from "../common/CustomizableButton";
import styles from "./loginform.module.css"; 
import regexValidation from "../signupform/helperFunctions/regexValidation";
import { useAuthLogIn } from "@/composables/authLogIn";

function LoginForm() {

    const [user, setUser] = useState({
        email: '',
        password: '',
      });

      const { addUser, firebaseError, LogIn } = useAuthLogIn();
      const [error, setError] = useState({});
    
      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value.trim()})
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const errors = regexValidation(user);
        if (Object.keys(errors).length === 0){
          LogIn(user);
          resetForm()
        }else {
          setError(errors)
        }
      }
        
      const resetForm = () => {
        setUser({ email: "", password: "" });
      };

    return (
      <form onSubmit={handleSubmit} className= {styles.form}>

        {/* email */}
        <div className = {styles.field}>
        <label htmlFor="email" className={styles.formLabel}>Email Address</label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        {firebaseError && (
            <span className="text-red-800 text-xs">Wrong Email</span>
        )}
        {error.email && (
            <span className="text-red-800 text-xs"> {error.email} </span>
        )}
        </div>

        {/* password */}
        <div className = {styles.field}>
        <label htmlFor="password" className={styles.formLabel}>Password</label>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="**********"
          required
        />
        {firebaseError && (
            <span className="text-red-800 text-xs">Wrong Password</span>
        )}
        {error.password && (
            <span className="text-red-800 text-xs"> {error.password} </span>
        )}
        </div>
        
        {/* button */}
        <CustomizableButton
        customClass={styles.btn}
        text="LOGIN"
         />
         <p className= {styles.que}>Forgotten Password?</p>
        
      </form>
    );
  }

export default LoginForm;
