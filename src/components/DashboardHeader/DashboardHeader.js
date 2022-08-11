import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiGridAlt } from 'react-icons/bi';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BsGearFill } from 'react-icons/bs';
import flag from '../../assets/flag.webp'
import actor from '../../assets/actor.jpg'
const DashboardHeader = () => {
    return (
        <div className='w-full pr-2 pt-5  '>
            <div className='flex justify-between items-center w-full'>
                <div>
                    <h1 className='text-2xl '>Dashboard</h1>
                </div>
                <div className='flex items-center gap-5'>
                    <div>
                        <FiSearch 
                        className='text-2xl'
                        />
                    </div>
                    <div>
                        <img className='w-[30px] object-cover' src={flag} alt="" />
                    </div>
                    <div>
                        <BiGridAlt 
                        className='text-2xl'
                        />
                    </div>
                    <div className='relative'>
                        <MdOutlineNotificationsNone 
                        className='text-2xl'
                        />
                          <div class=" rounded-full w-[20px] h-[20px] flex justify-center items-center bg-red-400 absolute top-[-8px] text-white left-[10px]">4</div>
                    </div>
                    <div className=''>
                        <BsGearFill 
                        className='text-2xl'
                        />
                      
                    </div>
                    <div>
                        <img className='w-[30px] object-cover rounded-full' src={actor} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;