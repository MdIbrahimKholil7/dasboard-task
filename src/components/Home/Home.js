import React from 'react';
import DashboardBody from '../Pages/DashboardBody';
import SideBar from '../Pages/SideBar';

const Home = () => {
    return (
        <div>
            <div className='flex items-center w-full'>
                <SideBar/>
                <DashboardBody/>
            </div>
        </div>
    );
};

export default Home;