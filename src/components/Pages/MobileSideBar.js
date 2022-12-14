import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { BsFillCalendarMinusFill } from 'react-icons/bs';
import { BsFillChatFill } from 'react-icons/bs';
import { CgCalendarTwo } from 'react-icons/cg';
import { RiHandbagFill } from 'react-icons/ri';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineWifi } from 'react-icons/ai';
import { SiDatabricks } from 'react-icons/si';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { BiGridAlt, BiUserCheck } from 'react-icons/bi';
import { TbBook } from 'react-icons/tb';
import { GrCodeSandbox } from 'react-icons/gr';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { MdEmail, MdInventory } from 'react-icons/md';



const sidebarVariants = {
    sidebarOpen: {
        width:'250px',
        transition: {
            // when: "beforeChildren",
            delay: 0.1,

        },
    },

    sidebarClosed: {
        width: 0,
        transition: {
            delay: 0.1,
        }
    },

};

const LinkBoxVariants = {
    sidebarOpen: {
        x:0,
        opacity: 1,
        transition: {
            // delay: 0.1,
            type: 'tween'
        }
    },
    sidebarClosed: {
       x:'-100vw',
        opacity: 1,
        transition: {
            delay: 0.1
        }
    },
};


const MobileSideBar = ({openSide}) => {
    console.log(openSide)
    return (
        <motion.div className="lg:hidden block"
        >
                {/* nav link  */}
                <motion.div

                    variants={sidebarVariants}
                    animate={openSide ? "sidebarOpen" : "sidebarClosed"}
                    // animate='sidebarOpen'
                    className='fixed top-16 left-0  bottom-0  overflow-y-auto overflow-x-hidden  text-gray-600 sidebar  z-[9999] cursor-pointer'
                >
                    <motion.div className=' bg-[#1d1c1c] overflow-y-auto overflow-x-hidden  text-gray-600 sidebar bottom-0 cursor-pointer py-9 px-2' variants={LinkBoxVariants}

                    >
                        <div className="overflow-x-hidden " >
                           
                            <div className=" mt-16 ">
                                <motion.ul className=" min-h-[100vh]  overflow-x-hidden overflow-y-hidden px-2" >
                                    <div className="flex  justify-between items-center text-white font-bold">
                                        <div className="flex ">
                                            <span>
                                                <BiGridAlt
                                                    className="text-3xl mr-3"
                                                />
                                            </ span>
                                            <p className="text-[16px] ">Dashboards</p>
                                        </div>

                                        <div>
                                            <HiChevronUp
                                                className="text-2xl"
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-10 text-white">
                                        <motion.li
                                            whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 420 } }}
                                            className="mt-5 flex justify-start pb-3 font-bold text-[16px] li-style "
                                        >
                                            Ecommerce
                                        </motion.li>

                                        <motion.li
                                            whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                            className="mt-5 flex justify-start pb-3 font-bold text-[16px] li-style text-gray-600"
                                        >
                                            Saas
                                        </motion.li>

                                        <motion.li
                                            whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                            className="   mt-5 flex justify-start pb-3 font-bold text-[16px] li-style text-gray-600"
                                        >
                                            Crypto
                                        </motion.li>

                                    </div>
                                    <div>
                                        {
                                            openSide && <h2 className="uppercase text-[14px] mt-7">Applications</h2>
                                        }
                                    </div>
                                    <div>
                                        <motion.li
                                            whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                            className="mt-5 flex items-center pb-3 font-bold text-[16px] li-style "
                                        >
                                            <span>
                                                <BsFillCalendarMinusFill
                                                    className="mr-3 text-xl "
                                                />
                                            </span>
                                            Calender
                                        </motion.li>
                                        <motion.li
                                            whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                            className="mt-5 flex items-center pb-3 font-bold text-[16px] li-style w-[94%]"
                                        >
                                            <span>
                                                <BsFillChatFill
                                                    className="mr-3 text-xl"
                                                />
                                            </span>
                                            <div className="flex justify-between items-center w-[100%]">
                                                Chat
                                                <span className="text-red-500">Hot</span>
                                            </div>
                                        </motion.li>
                                        <motion.li
                                            whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                            className="mt-5 flex items-center pb-3 font-bold text-[16px] li-style "
                                        >
                                            <span>
                                                <CgCalendarTwo
                                                    className="mr-3 text-xl"
                                                />
                                            </span>
                                            File Manager
                                        </motion.li>
                                        <motion.li
                                            whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                            className="mt-5 flex items-center pb-3 font-bold text-[16px] li-style "
                                        >
                                            <span>
                                                <RiHandbagFill
                                                    className="mr-3 text-xl"
                                                />
                                            </span>
                                            <div className="flex justify-between items-center w-[77%]">
                                                <span>
                                                    Ecommerce
                                                </span>
                                                <span>
                                                    <HiChevronDown
                                                        className="text-xl font-bold"
                                                    />
                                                </span>
                                            </div>
                                        </motion.li>
                                        <motion.li
                                            whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                            className="mt-5 flex items-center pb-3 font-bold text-[16px] li-style "
                                        >
                                            <span>
                                                <MdEmail
                                                    className="mr-3 text-xl"
                                                />
                                            </span>
                                            <div className="flex justify-between items-center w-[77%]">
                                                <span>
                                                    Email
                                                </span>
                                                <span>
                                                    <HiChevronDown
                                                        className="text-xl font-bold"
                                                    />
                                                </span>
                                            </div>
                                        </motion.li>
                                        <motion.li
                                            whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                            className="mt-5 flex items-center pb-3 font-bold text-[16px] li-style "
                                        >
                                            <span>
                                                <MdInventory
                                                    className="mr-3 text-xl"
                                                />
                                            </span>
                                            <div className="flex  justify-between items-center w-[77%]">
                                                <span>
                                                    Invoices
                                                </span>
                                                <span>
                                                    <HiChevronDown
                                                        className="text-xl ml-[-7px] block font-bold"
                                                    />
                                                </span>
                                            </div>
                                        </motion.li>
                                        <motion.li
                                            whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                            className="mt-5 flex items-center pb-3 font-bold text-[16px] li-style "
                                        >
                                            <span>
                                                <TbBook
                                                    className="mr-3 text-xl"
                                                />
                                            </span>
                                            <div className="flex justify-between items-center w-[77%]">
                                                <span>
                                                    Projects
                                                </span>
                                                <span>
                                                    <HiChevronDown
                                                        className="text-xl font-bold"
                                                    />
                                                </span>
                                            </div>
                                        </motion.li>
                                        <motion.li
                                            whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                            className="mt-5 flex items-center pb-3 font-bold text-[16px] li-style "
                                        >
                                            <span>
                                                <AiOutlineWifi
                                                    className="mr-3 text-xl"
                                                />
                                            </span>
                                            <div className="flex justify-between items-center w-[77%]">
                                                <span>
                                                    Contacts
                                                </span>
                                                <span>
                                                    <HiChevronDown
                                                        className="text-xl font-bold"
                                                    />
                                                </span>
                                            </div>
                                        </motion.li>
                                    </div>
                                    {
                                        openSide && < div >
                                            <h2 className="my-4 text-[14px] uppercase"> Layouts</h2>
                                            <h2 className="my-4 text-[14px] uppercase"> Pages</h2>
                                        </div>
                                    }
                                    <div>
                                        <motion.li
                                            whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                            className="mt-5 flex items-center pb-3 font-bold text-[13px] li-style "
                                        >
                                            <span>
                                                <BiUserCheck
                                                    className="mr-3 text-xl"
                                                />
                                            </span>
                                            <div className="flex justify-between items-center w-[77%]">
                                                <span>
                                                    Authentications
                                                </span>
                                                <span>
                                                    <div class="badge bg-[#26ddf5] text-white border-0 ">8</div>
                                                </span>
                                            </div>
                                        </motion.li>
                                        <motion.li
                                            whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                            className="mt-5 flex items-center pb-3 font-bold text-[16px] li-style "
                                        >
                                            <span>
                                                <GrCodeSandbox
                                                    className="mr-3 text-xl"
                                                />
                                            </span>
                                            <div className="flex justify-between items-center w-[77%]">
                                                <span>
                                                    Utility
                                                </span>
                                                <span>
                                                    <HiChevronDown
                                                        className="text-xl font-bold"
                                                    />
                                                </span>
                                            </div>
                                        </motion.li>
                                        <div>
                                            {
                                                openSide && <h2 className="text-[14px] my-5 uppercase">Components</h2>
                                            }
                                        </div>
                                        <div>
                                            <motion.li
                                                whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                                className="mt-5 flex items-center pb-3 font-bold text-[16px] li-style "
                                            >
                                                <span>
                                                    <SiDatabricks
                                                        className="mr-3 text-xl"
                                                    />
                                                </span>
                                                <div className="flex justify-between items-center w-[77%]">
                                                    <span>
                                                        UI Elements
                                                    </span>
                                                    <span>
                                                        <HiChevronDown
                                                            className="text-xl font-bold"
                                                        />
                                                    </span>
                                                </div>
                                            </motion.li>
                                            <motion.li
                                                whileHover={{ scale: 1.1, originX: 0, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                                className="mt-5 flex items-center pb-3 font-bold text-[16px] li-style "
                                            >
                                                <span>
                                                    <HiOutlinePencilAlt
                                                        className="mr-3 text-xl"
                                                    />
                                                </span>
                                                <div className="flex justify-between items-center w-[77%]">
                                                    <span>
                                                        Forms
                                                    </span>
                                                    <span>
                                                        <HiChevronDown
                                                            className="text-xl font-bold"
                                                        />
                                                    </span>
                                                </div>
                                            </motion.li>
                                        </div>
                                    </div>
                                </motion.ul>
                            </div>
                        </div>
                    </motion.div>
                </motion.div >
          
        </motion.div >
    );
};

export default MobileSideBar;
