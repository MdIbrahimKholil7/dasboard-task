import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { BsFillCalendarMinusFill } from 'react-icons/bs';
import { BsFillChatFill } from 'react-icons/bs';
import { CgCalendarTwo } from 'react-icons/cg';
import { FaMobile } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { BiGridAlt } from 'react-icons/bi';
import { HiChevronUp } from 'react-icons/hi';


const sidebarVariants = {
    sidebarOpen: {
        width: "260px",
        transition: {
            // when: "beforeChildren",
            delay: 0.1,

        },
    },

    sidebarClosed: {
        width: "0px",
        transition: {
            delay: 0.1,

        }
    },

};

const LinkBoxVariants = {
    sidebarOpen: {
        x: 0,
        opacity: 1,
        transition: {
            // delay: 0.1,
            type: 'tween'
        }
    },
    sidebarClosed: {
        x: '100vw',
        opacity: 0,
        transition: {
            delay: 0.1
        }
    },
};

const imgVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}


// theme handler 

const SideBar = ({ progress, setProgress }) => {
    const [open, setOpen] = useState(true)

    // sidebar toggler 
    const handleToggler = () => {
        setOpen(!open)
    }
    console.log(progress)

    return (
        <div className="lg:block hidden">

            {/* nav link  */}
            <motion.div
                variants={sidebarVariants}
                animate={open ? "sidebarOpen" : "sidebarClosed"}

                className=''
            >
                <motion.div className='fixed top-[0] bg-[#1d1c1c] w-[260px] left-0 text-gray-600' variants={LinkBoxVariants}

                >
                    <div className="overflow-x-hidden sidebar   " >
                        <div className="flex justify-end w-full pr-2">
                            <CgMenuRight
                                className="text-3xl rotate-180"
                            />
                        </div>

                        <div className=" mt-16">
                            <motion.ul className=" min-h-[100vh] px-2" >
                                <div className="flex justify-between items-center text-white font-bold">
                                    <div className="flex ">
                                        <span>
                                            <BiGridAlt
                                                className="text-3xl mr-3"
                                            />
                                        </ span>
                                        <p className="text-[18px] ">Dashboards</p>
                                    </div>

                                    <div>
                                        <HiChevronUp
                                            className="text-2xl"
                                        />
                                    </div>
                                </div>
                                <div className="ml-10 text-white">
                                    <motion.li
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                        className="mt-5 flex justify-start pb-3 font-bold text-[18px] li-style "
                                    >
                                        Ecommerce
                                    </motion.li>

                                    <motion.li
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                        className="mt-5 flex justify-start pb-3 font-bold text-[18px] li-style text-gray-600"
                                    >
                                        Saas
                                    </motion.li>

                                    <motion.li
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                        className="   mt-5 flex justify-start pb-3 font-bold text-[18px] li-style text-gray-600"
                                    >
                                        Crypto
                                    </motion.li>

                                </div>
                                <div>
                                    <h2 className="uppercase text-[14px] mt-7">Applications</h2>
                                </div>
                                <div>
                                    <motion.li
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                        className="mt-5 flex items-center pb-3 font-bold text-[18px] li-style "
                                    >
                                        <span>
                                            <BsFillCalendarMinusFill
                                                className="mr-3 text-xl "
                                            />
                                        </span>
                                        Calender
                                    </motion.li>
                                    <motion.li
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                        className="mt-5 flex items-center pb-3 font-bold text-[18px] li-style w-full"
                                    >
                                        <span>
                                            <BsFillChatFill
                                                className="mr-3 text-xl"
                                            />
                                        </span>
                                        <div className="flex justify-between items-center w-full">
                                            Chat
                                            <span className="text-red-500">Hot</span>
                                        </div>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{ scale: 1.1, transition: { ease: 'easeInOut', type: 'spring', stiffness: 320 } }}
                                        className="mt-5 flex items-center pb-3 font-bold text-[18px] li-style "
                                    >
                                        <span>
                                            <CgCalendarTwo
                                                className="mr-3 text-xl"
                                            />
                                        </span>
                                        File Manager
                                    </motion.li>
                                </div>

                            </motion.ul>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SideBar;
