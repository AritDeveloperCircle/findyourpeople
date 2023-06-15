import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/components/Header/NavBar';
import FooterBar from '@/components/common/FooterBar';
import DashboardListing from '@/components/singledashboardlisting/DashboardListing';

function ManagerDashboard () {
  return (
    <div>
        <NavBar />
        <main className='bg-white container mx-auto  max-w-xs md:max-w-2xl lg:max-w-5xl'>
            <div className='bg-primary-lite my-10 rounded-md flex flex-col sm-text-center'>
                <div className='flex flex-col gap-5 p-10  lg:text-left'>
                    <h1 className='text-5xl text-blue-800'>Welcome Back, Emmanuel!</h1>
                    <div className='mt-2'>
                        <Link href="#" className="text-slate-700  hover:text-blue-500 cursor-pointer text-2xl">Edit Profile</Link>
                    </div>
                </div>
                <div className=' md:flex lg:shrink-0 w-full max-w-lg h-80 mx-auto relative '>
                    <Image 
                    className='min-[320px]:text-center max-[1240px]:inherit '
                        src="/manager-dashboard-character.png"
                        alt="manager character"
                        fill            
                    />
                </div>
            </div>

            <div className='bg-grey-lite p-4 rounded-md mb-8'>
                <h1 className='text-lg lg:text-3xl p-2 text-center'>Community Dashboard</h1>
                    <div className="grid auto-rows-max grid-cols-1 md:grid-cols-2 md:max-w-3xl md:mx-auto gap-10 my-10">
                       
                            <DashboardListing 
                             />
                            <DashboardListing />
                    </div>
                <h2 className='text-2xl text-center'>+ Add new community</h2>
            </div>
        </main>
        <FooterBar />
    </div>
  )
}

export default ManagerDashboard;
