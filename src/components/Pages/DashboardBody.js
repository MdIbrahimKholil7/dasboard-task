import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { BiSquareRounded } from 'react-icons/bi';
const DashboardBody = () => {
    return (
        <div className='w-full bg-[#fffefe] min-h-screen'>
            <div className='w-full'>
                <DashboardHeader />
                <div className='mt-9 flex gap-3 justify-between'>
                    <div className='grid grid-cols-3 gap-3 w-full'>
                        <div className='flex justify-between shadow-xl px-3 py-6 rounded-md'>
                            <div className='flex gap-5'>
                                <p
                                className='bg-[#72c9f1]  px-3 flex justify-center items-center rounded-xl text-white'
                                > <BiSquareRounded /></p>
                                <div>
                                    <h1 className='text-[#555557]'>Revenue</h1>
                                    <p className='text-xl font-bold'>$21,456</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-end '>
                                <p className='bg-[#6dddbb2f] px-1 rounded-full text-[#23a129fa]'>+2.65%</p>
                            </div>
                        </div>
                        <div className='flex justify-between shadow-xl px-3 py-6 rounded-md'>
                            <div className='flex gap-5'>
                                <p
                                className='bg-[#72c9f1]  px-3 flex justify-center items-center rounded-xl text-white'
                                > <BiSquareRounded /></p>
                                <div>
                                    <h1 className='text-[#555557]'>Orders</h1>
                                    <p className='text-xl font-bold'>$5,643</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-end '>
                                <p className='bg-[#6dddbb2f] px-1 rounded-full text-[#23a129fa]'>-0.82%</p>
                            </div>
                        </div>
                        <div className='flex justify-between shadow-xl px-3 py-6 rounded-md'>
                            <div className='flex gap-5'>
                                <p
                                className='bg-[#72c9f1]  px-3 flex justify-center items-center rounded-xl text-white'
                                > <BiSquareRounded /></p>
                                <div>
                                    <h1 className='text-[#555557]'>Customers</h1>
                                    <p className='text-xl font-bold'>$45,254</p>
                                </div>
                            </div>
                            <div className='flex justify-center items-end '>
                                <p className='bg-[#6dddbb2f] px-1 rounded-full text-[#23a129fa]'>-1.04%</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[230px] bg-green-400'>
                        <h1>Profile</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardBody;