import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { BiSquareRounded, BiInfoCircle } from 'react-icons/bi';
import { FiShoppingBag } from 'react-icons/fi';
import { HiUsers } from 'react-icons/hi';
import coverImg from '../../assets/cover.jpg'
import user from '../../assets/actor.jpg'
import OverviewChart from './OverviewChart';
const DashboardBody = () => {
    return (
        <div className='w-full bg-[#fffefe] min-h-screen'>
            <div className='w-full'>
                <DashboardHeader />
                <div className='mt-9 flex gap-3 justify-between'>
                    <div>
                        <div className='grid grid-cols-3 gap-3 w-full'>

                            <div className='flex justify-between shadow-xl px-3 h-[97px] py-6 rounded-md'>
                                <div className='flex gap-5'>
                                    <p
                                        className='bg-[#72c9f1]  px-3 flex justify-center items-center rounded-xl text-white'
                                    > <BiSquareRounded
                                            className='text-xl'
                                        /></p>
                                    <div>
                                        <h1 className='text-[#555557]'>Revenue</h1>
                                        <p className='text-xl font-bold'>$21,456</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-end '>
                                    <p className='bg-[#6dddbb2f] px-1 rounded-full text-[#23a129fa]'>+ 2.65%</p>
                                </div>
                            </div>

                            <div className='flex justify-between h-[97px] shadow-xl px-3 py-6 rounded-md'>
                                <div className='flex gap-5'>
                                    <p
                                        className='bg-[#72c9f1]  px-3 flex justify-center items-center rounded-xl text-white'
                                    > <FiShoppingBag
                                            className='text-xl'
                                        /></p>
                                    <div>
                                        <h1 className='text-[#555557]'>Orders</h1>
                                        <p className='text-xl font-bold'>$5,643</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-end '>
                                    <p className='bg-[#6dddbb2f] px-1 rounded-full text-[#23a129fa]'>- 0.82%</p>
                                </div>
                            </div>

                            <div className='flex justify-between h-[97px] shadow-xl px-3 py-6 rounded-md'>
                                <div className='flex gap-5'>
                                    <p
                                        className='bg-[#72c9f1]  px-3 flex justify-center items-center rounded-xl text-white'
                                    > <HiUsers
                                            className='text-xl'
                                        /></p>
                                    <div>
                                        <h1 className='text-[#555557]'>Customers</h1>
                                        <p className='text-xl font-bold'>$45,254</p>
                                    </div>
                                </div>
                                <div className='flex justify-center items-end '>
                                    <p className='bg-[#6dddbb2f] px-1 rounded-full text-[#23a129fa]'>- 1.04%</p>
                                </div>
                            </div>

                        </div>
                        <div>
                            <OverviewChart/>
                            <h1>Side</h1>
                        </div>
                    </div>

                    <div className='lg:w-[250px] xl:min-w-[280px] 2xl:w-[450px] pr-3'>
                        <div className='w-full shadow-2xl'>
                            <div className='cover-img relative w-full h-[100px]'>
                                <img className='w-full object-cover h-full rounded-md rounded-tl-lg rounded-tr-lg' src={coverImg} alt="" />
                                <div class="avatar user-img">
                                    <div class="w-16">
                                        <img className='w-full border-4 border-white border-solid h-full object-cover rounded-full' src={user} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='text-center my-9 pb-9 px-3'>
                                <div >
                                    <h1 className='text-[18px] font-bold leading-9'>Jennifer Bennet</h1>
                                    <p>Product Designer</p>
                                </div>
                                <div className='flex w-full justify-between mt-9 pb-7'>
                                    <div className='flex justify-center items-center border-r-[#474545] border-r-2 border-solid w-full flex-col'>
                                        <p className='font-bold'>1,269 </p>
                                        <p>Followers</p>
                                    </div>
                                    <div className='flex justify-center items-center flex-col w-full' >
                                        <p className='font-bold'>5.2k </p>
                                        <p>Followers</p>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div >
                                    <div className='flex items-center justify-between mt-4'>
                                        <div>
                                            <p className='font-bold'>Earning</p>
                                        </div>
                                        <div>
                                            <span>
                                                <BiInfoCircle
                                                    className='text-xl'
                                                />
                                            </span>
                                        </div>
                                    </div>
                                    <div className='pb-5 flex justify-center items-center'>
                                        <div className='mt-7' role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style={{ '--value': 76 }}></div>
                                    </div>
                                    <div className='text-center'>
                                        <h1 className='text-xl font-bold leading-9'>$26,256</h1>
                                        <p>Earning this month</p>
                                    </div>
                                    <div className='flex justify-between items-center mt-4'>
                                        <span className='bg-[#6dddbb2f] px-1 rounded-full text-[#23a129fa] text-[14px]'>+ 2.65%</span>
                                        <p className='text-[14px]'>From previous period</p>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className='text-left'>
                                    <h1 className='text-left font-bold text-xl'>Recently Activity</h1>
                                    <div>
                                        <div className='flex gap-2 justify-between items-center text-[14px] my-5'>
                                            <p className='bg-[#f3f3f3] py-1 px-3 rounded-md'>
                                                <span className='block font-bold'>
                                                    12
                                                </span>
                                                Sep
                                            </p>
                                            <p >Responded to need "Volunteer Activities"</p>
                                        </div>
                                        <div>
                                            <div className='flex gap-2 justify-between items-center text-[14px] my-5'>
                                                <p className='bg-[#f3f3f3] py-1 px-3 rounded-md'>
                                                    <span className='block font-bold'>
                                                        11
                                                    </span>
                                                    Sep
                                                </p>
                                                <p >Everyone realizes would be describe...
                                                    <span className='text-left block text-[#46d5ee]'>Read more</span>
                                                </p>
                                            </div>

                                        </div>
                                        <div className='flex gap-2 justify-between items-center text-[14px] my-5'>
                                            <p className='bg-[#f3f3f3] py-1 px-3 rounded-md'>
                                                <span className='block font-bold '>
                                                    10
                                                </span>
                                                Sep
                                            </p>
                                            <p >Join the group "Boardsmanship Forum"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardBody;