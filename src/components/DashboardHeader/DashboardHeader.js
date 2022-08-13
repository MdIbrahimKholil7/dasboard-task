import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiGridAlt } from 'react-icons/bi';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BsGearFill } from 'react-icons/bs';
import flag from '../../assets/flag.webp'
import actor from '../../assets/actor.jpg'
import { CgMenuRight } from 'react-icons/cg';
const DashboardHeader = ({ setOpenProfile, openProfile,setOpenSide,openSide }) => {
    return (
        <div className='w-full pt-5  sticky top-0 left-3 z-10'>
            <div className='flex justify-between items-center w-full pr-3'>
                <div className='flex items-center gap-2'>
                    <CgMenuRight
                    onClick={()=>setOpenSide(!openSide)}
                        className='sm:text-3xl text-xl hover:text-3xl rotate-180 lg:hidden block cursor-pointer ml-2'
                    />
                    <h1 className='sm:text-2xl text-[15px]'>Dashboard</h1>
                </div>
                <div className='flex items-center sm:gap-5 gap-3'>
                    <div>
                        <FiSearch
                            className='sm:text-2xl text-[18px]'
                        />
                    </div>
                    <div>
                        <img className='sm:w-[30px] w-[20px] object-cover' src={flag} alt="" />
                    </div>
                    <div>
                        <BiGridAlt
                            className='sm:text-2xl text-[18px]'
                        />
                    </div>
                    <div className='relative'>
                        <MdOutlineNotificationsNone
                            className='sm:text-2xl text-[18px]'
                        />
                        <div class=" rounded-full sm:w-[20px] sm:h-[20px] w-[15px] h-[15px] flex justify-center items-center bg-red-400 absolute top-[-8px] text-white left-[10px]">4</div>
                    </div>
                    <div className=''>
                        <BsGearFill
                            className='sm:text-2xl text-[15px]'
                        />

                    </div>
                    <div className='cursor-pointer' onClick={() => setOpenProfile(!openProfile)}>
                        <img className='sm:w-[30px] w-[22px] object-cover rounded-full' src={actor} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;