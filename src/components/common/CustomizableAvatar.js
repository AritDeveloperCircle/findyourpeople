import Image from 'next/image'
import styles from '@/styles/Home.module.css'

function CustomizableAvatar({ customClass, src, height, width, alt }) {
  return (
    <div className={customClass}>
      <h1>Customizable Avatar</h1>
      <Image
        className='avatar-image'
        src={src}
        height={height}
        width={width}
        alt={alt}
      />
    </div>
  )
}

export default CustomizableAvatar
