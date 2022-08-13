import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { BiSquareRounded } from 'react-icons/bi';
import { FiShoppingBag } from 'react-icons/fi';
import { HiUsers } from 'react-icons/hi';
import OverviewChart from './OverviewChart';
import Status from './Status';
import Profile from './Profile';
import { motion } from 'framer-motion'
import MobileProfile from './MobileProfile';
const DashboardBody = ({setOpenSide,openSide}) => {

    const [openProfile, setOpenProfile] = useState(true)

    const profileVariants = {
        openProfile: {
            x: 0,
            opacity: 1,
            y: '-10%',
            transition: {

                type: 'tween'
            },

        },
        closeProfile: {
            x: '200vw',
            opacity: 0,
            y: '1%',
            transition: {
                delay: 0.1
            }

        }
    }

    return (
        <div className='w-full bg-[#fffefe] overflow-x-hidden min-h-screen '>
            <div className='w-full  z-[999] ml-0 relative '>
                <div className='w-full '>
                    <DashboardHeader
                        openProfile={openProfile}
                        setOpenProfile={setOpenProfile}
                        setOpenSide={setOpenSide}
                        openSide={openSide}
                    />
                </div>
                <div className='mt-20  w-full flex gap-1 z-[-20]'>
                    <div className='w-full'>
                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 sm:px-9 sm::px-4 lg:px-0 w-full'>

                            <div className='flex justify-between shadow-xl px-3 h-[97px] py-6 rounded-md'>
                                <div className='flex gap-5'>
                                    <p
                                        className='bg-[#72c9f1]  sm:px-3 px-2  flex justify-center items-center rounded-xl text-white'
                                    > <BiSquareRounded
                                            className='text-xl'
                                        /></p>
                                    <div>
                                        <h1 className='text-[#555557]'>Revenue</h1>
                                        <p className='text-[16px] font-bold'>$21,456</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-end '>
                                    <p className='bg-[#6dddbb2f] px-1 text-[14px] rounded-full text-[#23a129fa]'>+ 2.65%</p>
                                </div>
                            </div>

                            <div className='flex justify-between h-[97px] shadow-xl px-3 py-6 rounded-md'>
                                <div className='flex gap-5'>
                                    <p
                                        className='bg-[#72c9f1] sm:px-3 px-2 flex justify-center items-center rounded-xl text-white'
                                    > <FiShoppingBag
                                            className='text-xl'
                                        /></p>
                                    <div>
                                        <h1 className='text-[#555557]'>Orders</h1>
                                        <p className='text-[16px] font-bold'>$5,643</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-end '>
                                    <p className='bg-[#6dddbb2f] text-[14px]  px-1 rounded-full text-[#23a129fa]'>- 0.82%</p>
                                </div>
                            </div>

                            <div className='flex justify-between h-[97px] shadow-xl px-3 py-6 rounded-md'>
                                <div className='flex gap-5'>
                                    <p
                                        className='bg-[#72c9f1]  sm:px-3 px-2 flex justify-center items-center rounded-xl text-white'
                                    > <HiUsers
                                            className='text-xl'
                                        /></p>
                                    <div>
                                        <h1 className='text-[#555557]'>Customers</h1>
                                        <p className='text-[16px] font-bold'>$45,254</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-end '>
                                    <p className='bg-[#6dddbb2f] text-[14px] px-1 rounded-full text-[#23a129fa]'>- 1.04%</p>
                                </div>
                            </div>

                        </div>
                        {/* chart section  */}
                        <div className='w-full pb-14 '>
                            <div className='w-full px-3'>
                                <OverviewChart />
                            </div>
                            <div>
                                <Status />
                            </div>
                        </div>
                    </div>

                    {/* profile section  */}
                    <div className=''>
                        <div className='xl:block hidden'>
                            <motion.div
                                variants={profileVariants}
                                animate={openProfile ? 'openProfile' : 'closeProfile'}
                                className={`${openProfile ? '' : 'hidden'} '2xl:ml-[446px] xl:ml-[312px] relative '`}>
                                <Profile
                                    openProfile={openProfile}
                                />
                            </motion.div>
                        </div>
                        <div className='xl:hidden block'>
                            <MobileProfile
                                openProfile={openProfile}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardBody;