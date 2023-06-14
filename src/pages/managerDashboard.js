import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/components/Header/NavBar';
import FooterBar from '@/components/common/FooterBar';
import DashboardListing from '@/components/singledashboardlisting/DashboardListing';
// import styles from '../styles/managerDashboard.module.css';

function ManagerDashboard () {
  return (
    <div>
        <NavBar />
        <main className='bg-white container mx-auto p-10'>
            <div className='bg-primary-lite my-10 rounded-md flex justify-between sm-text-center'>
                <div className='flex flex-col gap-5 p-10  lg:text-left'>
                    <h1 className='text-5xl text-blue-800'>Welcome Back, Emmanuel!</h1>
                    <div className='pt-10'>
                        <Link href="#" class="text-slate-700 text-base hover:text-blue-500 cursor-pointer text-2xl">Edit Profile</Link>
                    </div>
                </div>
                <div className='pr-40 pt-8 md:flex lg:shrink-0 '>
                    <Image 
                    className='min-[320px]:text-center max-[1240px]:inherit sm:invisible md:invisible lg:visible'
                        src="/manager-dashboard-character.png"
                        alt="manager character"
                        width={500}
                        height={500}
                    />
                </div>
            </div>

            <div className='bg-grey-lite p-10 rounded-md'>
                <h1 className='text-5xl p-10 text-center'>Community Dashboard</h1>
                    <div className="grid grid-cols-2 col-span-1 auto-rows-max justify-items-center sm:grid-cols-1 xl:grid-cols-2 gap-10 my-10">
                        <div className='col-span-1 pb-6'>
                            <DashboardListing 
                            className="" />
                        </div>
                        <div className='col-span-1 pb-6'>
                            <DashboardListing />
                        </div>
                    </div>
                <h2 className='text-2xl text-center'>+ Add new community</h2>
            </div>
        </main>
        <FooterBar />
    </div>
  )
}

export default ManagerDashboard;
