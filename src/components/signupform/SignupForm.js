import { useState } from 'react'
import CustomizableButton from '../common/CustomizableButton'
import styles from './signupform.module.css'

function Form() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted sucessfully')
      // Will direct the user to the Login Form
      setTimeout(() => {
        resetForm()
      }, 1000)
    }
  }

  const resetForm = () => {
    setUser({ name: '', email: '', password: '' })
  }

  const validateForm = () => {
    if (!user.name || !user.email || !user.password) {
      alert('please fill out all required fields.')
      return false
    }

    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (!user.email.match(emailPattern)) {
      alert('please enter a valid email address')
      return false
    }

    return true
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* name */}
        <div className={styles.formRow}>
          <label htmlFor='name' className={styles.formLabel}>
            Name<span>*</span>
          </label>
          <input
            type='text'
            className={styles.formInput}
            id='name'
            name='name'
            aria-label='name'
            value={user.name}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={50}
          />
        </div>
        {/* email */}
        <div className={styles.formRow}>
          <label htmlFor='email' className={styles.formLabel}>
            Email<span>*</span>
          </label>
          <input
            type='email'
            className={styles.formInput}
            id='email'
            name='email'
            aria-label='email'
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* password */}
        <div className={styles.formRow}>
          <label htmlFor='password' className={styles.formLabel}>
            Password<span>*</span>
          </label>
          <input
            type='password'
            className={styles.formInput}
            id='password'
            name='password'
            aria-label='password'
            value={user.password}
            onChange={handleChange}
            required
            minLength={6}
            maxLength={20}
          />
        </div>
        <CustomizableButton
          customClass={styles.btn}
          text='SIGN UP'
          aria-label='Sign up button'
        />
      </form>
    </div>
  )
}

export default Form
