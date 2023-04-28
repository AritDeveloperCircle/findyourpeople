import Link from 'next/link'
import styles from './signupcontainer.module.css'
import CustomizableAvatar from '../CustomizableAvatar'
import SignupForm from './SignupForm'
import images from '../../../images/index'

function SignupFormContainer() {
  return (
    <main>
      <div className={styles.div}>
        <CustomizableAvatar
          height={100}
          width={100}
          src={images.signupAvatar}
          alt='main avatar'
        />
      </div>
      <h2 className={styles.header}>Create an account</h2>
      <h4 className={styles.sub}>
        Lets get started with creating your community!
      </h4>
      <SignupForm />
      <div className={styles.login}>
        <p>
          Have an account? <a href='#'>Login</a>{' '}
        </p>
      </div>
    </main>
  )
}

export default SignupFormContainer
