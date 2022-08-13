import React, { useState } from 'react';
import DashboardBody from '../Pages/DashboardBody';
import MobileSideBar from '../Pages/MobileSideBar';
import SideBar from '../Pages/SideBar';

const Home = () => {
    const [openSide, setOpenSide] = useState(false)
    return (
        <div>
            <div className='flex items-center w-full'>
                <div>
                    <div className='lg:block hidden '>
                        <SideBar />
                    </div>
                  
                        <MobileSideBar
                        openSide={openSide}
                        />
                    
                </div>
                <DashboardBody 
                openSide={openSide}
                setOpenSide={setOpenSide}
                />
            </div>
        </div>
    );
};

export default Home;