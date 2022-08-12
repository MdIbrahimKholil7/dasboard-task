import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Status = () => {
    const data = [
        {
            "name": "W-1",
            "uv": 20,
            "pv": 24,
            "amt": 2400
        },
        {
            "name": "W-2",
            "uv": 10,
            "pv": 26,
            "amt": 2210
        },
        {
            "name": "W-3",
            "uv": 22,
            "pv": 14,
            "amt": 2290
        },
        {
            "name": "W-4",
            "uv": 17,
            "pv": 18,
            "amt": 2000
        },
        
        
       
       
    ]

    return (
        <div>
            <div className='grid grid-cols-3 gap-2 mt-20'>
                <div className='w-full shadow-xl'>
                    <div className='w-full flex justify-between items-center mb-5'>
                        <h1 className='font-bold'>User Activity</h1>
                        <select>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    <div className='flex justify-between mb-7'>
                        <div>
                            <h1 className='text-gray-400'>This Month</h1>
                            <p className='text-[18px] font-bold leading-9'>16,543</p>
                        </div>
                        <div className='flex items-end gap-3' >
                            <p><span className='w-[10px] h-[10px] inline-block bg-[#46d5ee] rounded-full mr-1'></span>Current</p>
                            <p><span className='w-[10px] h-[10px] inline-block bg-[#f88323] rounded-full mr-1'></span>Previous</p>
                        </div>
                    </div>
                    <div className='w-full h-[240px]'>
                        <ResponsiveContainer width='100%' height='100%'>
                            <AreaChart data={data}
                            >
                                <defs>

                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#46d5ee" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#46d5ee" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f88323" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#f88323" stopOpacity={0} />
                                    </linearGradient>

                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis axisLine={false}/>
                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#f88323" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="pv" stroke="#46d5ee" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                </div>
                <div className='w-full shadow-xl bg-red-500'>
                    <div className='w-full flex justify-between items-center'>
                        <h1>User Activity</h1>
                        <select>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    <div className='flex justify-between '>
                        <div>
                            <h1>This Month</h1>
                            <p>16,543</p>
                        </div>
                        <div className='flex'>
                            <p><span className='w-[30px] h-[30px] bg-red-500 rounded-full'></span>Current</p>
                            <p><span className='w-[30px] h-[30px] bg-red-500 rounded-full'></span>Previous</p>
                        </div>
                    </div>

                </div>
                <div className='w-full shadow-xl bg-red-500'>
                    <div className='w-full flex justify-between items-center'>
                        <h1 className='font-bold'>User Activity</h1>
                        <select>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    <div className='flex justify-between '>
                        <div>
                            <h1>This Month</h1>
                            <p>16,543</p>
                        </div>
                        <div className='flex'>
                            <p><span className='w-[30px] h-[30px] bg-red-500 rounded-full'></span>Current</p>
                            <p><span className='w-[30px] h-[30px] bg-red-500 rounded-full'></span>Previous</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Status;