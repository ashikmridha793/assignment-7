"use client";
import React, { useEffect, useState } from 'react';

const page = () => {
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('timeline')) || [];
        setTimeline(data);
    }, []);

    const getIcon = (type) => {
        if (type === 'call') return '📞';
        if (type === 'message') return '💬';
        if (type === 'video') return '📹';
        return '📝';
    }

    return (
        <div className='p-6 md:w-8/12 mx-auto'>
            <h1 className='text-3xl font-bold text-left'>Timeline</h1>

            {timeline.length === 0 ? (
                <p className='text-gray-600'>No interactions yet</p>
            ) : (
                    timeline.map((item) => (
                        <div key={item.id} className='bg-white shadow-md p-4 rounded-lg mb-4 flex items-center gap-4'>
                            <div className='text-2xl'>{getIcon(item.type)}</div>
                            <div>
                                <p className='font-semibold'>{item.title}</p>
                                <p className='text-gray-600 text-sm'>
                                    {new Date(item.date).toDateString()}
                                </p>
                            </div>
                        </div>
                    ))
            )}
        </div>
    );
};

export default page;