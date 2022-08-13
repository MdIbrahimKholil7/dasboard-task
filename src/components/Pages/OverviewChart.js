
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OverviewChart = () => {

    const data = [
        {
            "name": "Feb",
            
            "pv": 40
        },
        {
            "name": "Mar",
            "pv": 30
        },
        {
            "name": "Apr",
            "pv": 34
        },
        {
            "name": "May",
            "pv": 38
        },
        {
            "name": "Jun",
            "pv": 24
        },
        {
            "name": "Jul",
            "pv": 29
        },
        {
            "name": "Aug",
            "pv": 33
        },
        {
            "name": "Sep",
            "pv": 30
        },
        {
            "name": "Oct",
            "pv": 39
        },
    ]

    return (
        <div className='w-full mt-14 shadow md:px-[3]] px-4 py-7'>
            <div className='flex justify-between items-center w-full mb-4'>
                <div>
                    <h1 className=' font-bold'>Overview</h1>
                </div>
                <div className='flex items-center'>
                    <p className=' font-bold'>Sort By:</p>
                    <select class="">
                        
                        <option>Yearly</option>
                        <option>Monthly</option>
                        <option>Weekly</option>
                    </select>
                </div>
            </div>
            <div className=' flex flex-col w-full lg:flex-row justify-between items-center mt-14 '>

                <div className='w-full flex justify-center'>
                    <div className='w-full'>
                        <h1 >This Month</h1>
                        <div className='flex  gap-5 w-full'>
                            <p className='sm:text-[18px] text-[16px] font-bold mt-2'>$24,568</p>
                            <p className='bg-[#6dddbb2f] px-1 py-0 rounded-full flex justify-center items-center text-[#23a129fa] sm:text-[14px] text-[12px]'>+ 2.65%</p>
                        </div>
                        <div className='mt-9 '>
                            <div className='flex sm:w-[210px] w-full justify-between border-b-2 border-[#d4d2d2] border-solid'>
                                <div className='w-full border-r-2 border-[#d4d2d2] border-solid'>
                                    <h3 className='text-gray-400'>Orders</h3>
                                    <p className='text-[18px] font-bold pb-3'>5,643</p>
                                </div>
                                <div className='w-full pl-2'>
                                    <h3 className='text-gray-400'>Sales</h3>
                                    <p className='text-[18px] font-bold pb-3'>16,273</p>
                                </div>
                            </div>
                            <div className='flex sm:w-[210px] w-full justify-between border-b-2 border-[#d4d2d2] border-solid'>
                                <div className='w-full border-r-2 border-[#d4d2d2] border-solid pt-5'>
                                    <h3 className='text-gray-400'>Orders</h3>
                                    <p className='text-[18px] font-bold pb-3'>5,643</p>
                                </div>
                                <div className='w-full pl-2 pt-5'>
                                    <h3 className='text-gray-400'>Sales</h3>
                                    <p className='text-[18px] font-bold pb-3'>16,273</p>
                                </div>
                            </div>
                            <div className='flex sm:w-[210px] w-full justify-between '>
                                <div className='w-full border-r-2 border-[#d4d2d2] border-solid pt-5'>
                                    <h3 className='text-gray-400'>Orders</h3>
                                    <p className='text-[18px] font-bold pb-3'>5,643</p>
                                </div>
                                <div className='w-full pl-2 pt-5'>
                                    <h3 className='text-gray-400'>Sales</h3>
                                    <p className='text-[18px] font-bold pb-3'>16,273</p>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>

                <div className='lg:w-[70%] w-full mt-16 relative'>
                    <ResponsiveContainer width='100%' aspect={2}>
                        <BarChart data={data}>
                            {/* <CartesianGrid /> */}
                            <XAxis dataKey="name"/>
                            <YAxis axisLine={false}/>
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#46d5ee " />
                            <Bar />
                        </BarChart>
                    </ResponsiveContainer>
                   
                </div>

            </div>
        </div>
    );
};

export default OverviewChart;