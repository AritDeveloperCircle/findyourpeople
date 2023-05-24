import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import NavBar from '@/components/Header/NavBar';
import CustomizableAvatar from '@/components/common/customavatar/CustomizableAvatar';
import CustomizableButton from '@/components/common/CustomizableButton';
import FooterBar from '@/components/common/FooterBar';
import DashboardListing from '@/components/singledashboardlisting/DashboardListing';

function managerDashboard () {
  return (
    <div>
        <NavBar />

        <main className='bg-white'>
            <div className='bg-sky-200 p-20 m-20 rounded-md flex justify-between'>
                <div className=''>
                    <h1 className='text-5xl'>Welcome Back, Emmanuel!</h1>
                    <p>You have 8 new members!</p>
                    <h3>Edit Profile</h3>
                </div>
                <div>
                    {/* <Image
                        src="./profile/manager-dashboard-character.png"
                        alt="manager character"
                        width={80}
                        height={28}
                    /> */}
                </div>
            </div>

            <div className='bg-sky-200 text-center p-20 m-20 rounded-md'>
                <h1 className='text-5xl'>Community Dashboard</h1>
                    <div className='grid grid-cols-2 place-content-center p-40'>
                        <div className='w-screen'>
                            <DashboardListing />
                        </div>
                        <div className='w-screen'>
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