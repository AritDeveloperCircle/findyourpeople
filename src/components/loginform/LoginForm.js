import { useState } from "react";
import CustomizableButton from "../common/CustomizableButton";
import styles from "./loginform.module.css" 

function LoginForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const [errors, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const validateForm = () => {
        const errors = {};
        if (!formData.email) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Invalid email address';
        }
        if (!formData.password) {
          errors.password = 'Password is required';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          // submit form data
          console.log(formData);
          // reset form
          resetForm();
        }
      };
    
      const resetForm = () => {
        setFormData({
          email: '',
          password: '',
        });
        setErrors({});
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
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>

        {/* password */}
        <div className = {styles.field}>
        <label htmlFor="password" className={styles.formLabel}>Password</label>
        <input
          className={styles.input}
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          minLength={20}
          maxLength={6}
          required
        />
        </div>
        {errors.password && <span>{errors.password}</span>}

        {/* button */}
        <CustomizableButton
        customClass={styles.btn}
        text= "LOGIN"
         />
         <p className= {styles.que}>Forgotten Password?</p>
        
      </form>
    );
  }
  
  export default LoginForm;