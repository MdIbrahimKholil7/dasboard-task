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
                                <YAxis axisLine={false} />
                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#f88323" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="pv" stroke="#46d5ee" fillOpacity={1} fill="url(#colorPv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                </div>
                <div className='w-full shadow-xl px-3'>
                    <div className='w-full flex justify-between items-center px-2 pt-3'>
                        <h1 className='font-bold'>Order Status</h1>
                        <p className='text-xl'>...</p>
                    </div>
                    <div className='flex justify-between p-2 rotate-[240deg] mt-7'>
                        <div>
                            <div class="donut instalment2">
                                <div class="donut-default"></div>
                                <div class="donut-line"></div>
                                <div class="donut-text"></div>
                                <div class="donut-case"></div>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className='flex justify-between items-center w-full'>
                        <h1 className='text-gray-400 text-[14px]'>Completed</h1>
                        <h1 className='text-gray-400 text-[14px]'>Cancel</h1>
                        <h1 className='text-gray-400 text-[14px]'>Pending</h1>
                    </div>
                </div>
                <div className='w-full shadow-xl px-3 pt-4'>
                    <div className='w-full flex justify-between items-center'>
                        <h1 className='font-bold'>Top Product</h1>
                        <select>
                            <option>Monthly</option>
                            <option>Yearly</option>
                            <option>Weekly</option>
                        </select>
                    </div>
                    <div className=' '>
                        <div className='flex items-center justify-between my-5'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#46d5eecc] p-2 rounded-md text-white font-bold'>
                                    #1
                                </div>
                                <div className='text-[14px]'>
                                    <p className='text-gray-400'>Polo blue shirt</p>
                                    <p className='font-bold leading-9'>$ 25.4</p>
                                </div>
                            </div>
                            <div className='bg-[#f2f5ef] px-3 rounded-full py-1 font-bold'>
                                <p>3.82k</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between my-5'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#46d5eecc] p-2 rounded-md text-white font-bold'>
                                    #2
                                </div>
                                <div className='text-[14px]'>
                                    <p className='text-gray-400'>Hoodie for men</p>
                                    <p className='font-bold leading-9'>$ 24.5</p>
                                </div>
                            </div>
                            <div className='bg-[#f2f5ef] px-3 rounded-full py-1 font-bold'>
                                <p>3.14k</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between my-5'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#46d5eecc] p-2 rounded-md text-white font-bold'>
                                    #3
                                </div>
                                <div className='text-[14px]'>
                                    <p className='text-gray-400'>Red color cap</p>
                                    <p className='font-bold leading-9'>$ 22.5</p>
                                </div>
                            </div>
                            <div className='bg-[#f2f5ef] px-3 rounded-full py-1 font-bold'>
                                <p>2.84k</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between my-5'>
                            <div className='flex gap-3 items-center'>
                                <div className='bg-[#46d5eecc] p-2 rounded-md text-white font-bold'>
                                    #4
                                </div>
                                <div className='text-[14px]'>
                                    <p className='text-gray-400'>Rocket T-shirt</p>
                                    <p className='font-bold leading-9'>$20.4</p>
                                </div>
                            </div>
                            <div className='bg-[#f2f5ef] px-3 rounded-full py-1 font-bold'>
                                <p>2.06k</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Status;