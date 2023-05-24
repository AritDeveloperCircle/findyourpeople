import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/components/Header/NavBar';
import CustomizableAvatar from '@/components/common/customavatar/CustomizableAvatar';
import CustomizableButton from '@/components/common/CustomizableButton';
import FooterBar from '@/components/common/FooterBar';
import DashboardListing from '@/components/singledashboardlisting/DashboardListing';
import styles from '../styles/managerDashboard.module.css';

function managerDashboard () {
  return (
    <div>
        <NavBar />

        <main className='bg-white'>
            <div className='bg-sky-200 m-20 rounded-md flex justify-between sm-text-center'>
                <div className='flex flex-col gap-3 p-20'>
                    <h1 className='text-5xl text-blue-800'>Welcome Back, Emmanuel!</h1>
                    <p className='text-2xl'>You have 8 new members!</p>
                    <div className='pt-10'>
                        <Link href="#" class="text-slate-700 text-base hover:text-blue-500 cursor-pointer text-2xl">Edit Profile</Link>
                    </div>
                </div>
                <div className='pr-40 pt-8 md:flex lg:shrink-0 '>
                    <Image className='min-[320px]:text-center max-[1240px]:inherit'
                        src="/manager-dashboard-character.png"
                        alt="manager character"
                        width={500}
                        height={500}
                    />
                </div>
            </div>

            <div className='bg-slate-200 text-center p-20 m-20 rounded-md'>
                <h1 className='text-5xl'>Community Dashboard</h1>
                    <div className='flex flex-row justify-stretch min-[320px]:text-center max-[1240px]:inherit'
                    // 'grid grid-cols-2 place-content-center p-40'
                    >
                        <div className='flex-initial '>
                            <DashboardListing />
                        </div>
                        <div className='flex-initial '>
                            <DashboardListing />
                        </div>
                        
                    </div>
                <h2 className='text-2xl'>+ Add new community</h2>
            </div>
        </main>
        
        
        <FooterBar />
    </div>
    

  )
}

export default managerDashboard;