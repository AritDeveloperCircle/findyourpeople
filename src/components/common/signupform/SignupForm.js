import { useState } from 'react'
import CustomizableButton from '../CustomizableButton'
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
        <div className={styles.form_row}>
          <label htmlFor='name' className={styles.form_label}>
            Name<span>*</span>
          </label>
          <input
            type='text'
            className={styles.form_input}
            id='name'
            name='name'
            value={user.name}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={50}
          />
        </div>
        {/* email */}
        <div className={styles.form_row}>
          <label htmlFor='email' className={styles.form_label}>
            Email<span>*</span>
          </label>
          <input
            type='email'
            className={styles.form_input}
            id='email'
            name='email'
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* password */}
        <div className={styles.form_row}>
          <label htmlFor='password' className={styles.form_label}>
            Password<span>*</span>
          </label>
          <input
            type='password'
            className={styles.form_input}
            id='password'
            name='password'
            value={user.password}
            onChange={handleChange}
            required
            minLength={6}
            maxLength={20}
          />
        </div>
        <CustomizableButton customClass={styles.btn} text='SIGN UP' />
      </form>
    </div>
  )
}

export default Form
