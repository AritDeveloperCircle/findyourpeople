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
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* name */}
        <div className={styles.form_row}>
          <label htmlFor='name' className={styles.form_label}>
            Name
          </label>
          <input
            type='text'
            className={styles.form_input}
            id='name'
            name='name'
            value={user.name}
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className={styles.form_row}>
          <label htmlFor='email' className={styles.form_label}>
            Email
          </label>
          <input
            type='email'
            className={styles.form_input}
            id='email'
            name='email'
            value={user.email}
            onChange={handleChange}
          />
        </div>
        {/* password */}
        <div className={styles.form_row}>
          <label htmlFor='password' className={styles.form_label}>
            Password
          </label>
          <input
            type='password'
            className={styles.form_input}
            id='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <CustomizableButton customClass={styles.btn} text='SIGN UP' />
      </form>
    </div>
  )
}

export default Form
