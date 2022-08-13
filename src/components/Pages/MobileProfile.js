import React from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import coverImg from '../../assets/cover.jpg'
import user from '../../assets/actor.jpg'
import { motion } from 'framer-motion'
const MobileProfile = ({ openProfile }) => {

    const profileVariants = {
        openProfile: {
            x: 0,
            opacity: 1,
            y:'1%',
            transition:{
                type:'tween',
            
            }

        },
        closeProfile: {
            x: '100vw',
            opacity: 1,
            y:'5%',
            transition: {
                delay: 0.1
            }

        }
    }

    return (
        <div>
            <motion.div 
            variants={profileVariants}
            animate={openProfile ? 'openProfile':'closeProfile'}
            className='lg:w-[250px] sm:w-[230px] w-[210px] xl:min-w-[280px] 2xl:w-[400px] bg-base-200 index absolute top-[70px] right-3'>
                <div className='shadow-2xl '>
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
                            <h1 className='sm:text-[18px] text-[15px] font-bold leading-9'>Jennifer Bennet</h1>
                            <p className='sm:text-[16px] text-[13px]'>Product Designer</p>
                        </div>
                        <div className='flex w-full justify-between mt-9 pb-7'>
                            <div className='flex justify-center items-center border-r-[#474545] sm:border-r-2 border-r-[1px]  border-solid w-full flex-col'>
                                <p className='font-bold sm:text-[16px] text-[14px]'>1,269 </p>
                                <p className='sm:text-[16px] text-[14px]'>Followers</p>
                            </div>
                            <div className='flex justify-center items-center flex-col w-full' >
                                <p className='font-bold sm:text-[16px] text-[14px]'>5.2k </p>
                                <p className='sm:text-[16px] text-[14px]'>Followers</p>
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
                                <h1 className='text-xl sm:text-[16px] text-[14px] font-bold leading-9'>$26,256</h1>
                                <p className='sm:text-[16px] text-[14px]'>Earning this month</p>
                            </div>
                            <div className='flex justify-between items-center mt-4'>
                                <span className='bg-[#6dddbb2f] px-1 rounded-full text-[#23a129fa] text-[10px]'>+ 2.65%</span>
                                <p className='text-[12px]'>From previous period</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className='text-left'>
                            <h1 className='text-left sm:text-[16px] text-[14px] font-bold text-xl'>Recently Activity</h1>
                            <div>
                                <div className='flex gap-2 justify-between items-center sm:text-[16px] text-[12px] my-5'>
                                    <p className='bg-[#f3f3f3] py-1 px-3 rounded-md '>
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
            </motion.div>
        </div>
    );
};

export default MobileProfile;