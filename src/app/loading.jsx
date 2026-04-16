"use client";
import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='fixed inset-0 flex items-center justify-center bg-blue/50 z-50'>
                <span className="loading loading-spinner text-success"></span>
            </div>
        </div>
    );
};

export default Loading;