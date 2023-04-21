import Image from 'next/image'
import style from '@/styles/customizableavatar.module.css'

function CustomizableAvatar({ customClass, src, height, width, alt }) {
  return (
    <div className={customClass}>
      <h1>Customizable Avatar</h1>
      <Image
        className={style.image}
        src={src}
        height={height}
        width={width}
        alt={alt}
      />
    </div>
  )
}

export default CustomizableAvatar
