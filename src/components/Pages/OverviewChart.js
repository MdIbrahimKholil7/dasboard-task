
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OverviewChart = () => {

    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ]

    return (
        <div className='w-full mt-14 '>
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
            <div className='w-full flex justify-between mt-14 gap-3'>

                <div className='w-full'>
                    <div className='w-full'>
                        <h1 >This Month</h1>
                        <div className='flex gap-5 w-full'>
                            <p className='text-2xl font-bold mt-2'>$24,568</p>
                            <p className='bg-[#6dddbb2f] px-1 rounded-full flex justify-center items-center text-[#23a129fa]'>+ 2.65%</p>
                        </div>
                    </div>
                </div>

                <div>
                    <ResponsiveContainer width={400} aspect={2}>
                        <BarChart data={data}>
                            <CartesianGrid />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
};

export default OverviewChart;