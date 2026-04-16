import React from 'react';
import Link from 'next/link';
const NotFound = () => {
    return (
        <div className='fixed inset-0 bg-gray-100 flex text-center flex-col items-center justify-center z-50'>
            
                <h1 className='text-7xl font-bold text-red-700'>404</h1>
                <h3 className='text-3xl font-semibold text-gray-800'>Page Not Found</h3>
                <p className='mb-6 text-lg text-gray-600'>The page is not exist</p>
            <Link href="/">
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                    Go back home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;