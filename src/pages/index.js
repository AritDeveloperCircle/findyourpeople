import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import images from '../images/index'
import style from '@/styles/customizableavatar.module.css'
import CustomizableAvatar from '@/components/common/CustomizableAvatar'

const poppins = Poppins({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <CustomizableAvatar
          src={images.mainAvatar}
          alt='Main Avatar'
          height={100}
          width={100}
        />
      </div>
    </>
  )
}
