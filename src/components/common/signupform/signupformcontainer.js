import Link from 'next/link'
import styles from './signupcontainer.module.css'
import CustomizableAvatar from '../CustomizableAvatar'
import SignupForm from './SignupForm'

function SignupFormContainer() {
  return (
    <div>
      <h2 className={styles.header}>Create an account</h2>
      <h4 className={styles.sub}>
        Lets get started with creating your community!
      </h4>
      <SignupForm></SignupForm>
    </div>
  )
}

export default SignupFormContainer
