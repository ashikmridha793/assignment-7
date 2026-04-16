import React from 'react';

const loading = () => {
    return (
        <div>
            <div className='fixed inset-0 flex items-center justify-center bg-white/60 z-50'>
                <span className="loading loading-spinner text-success"></span>
            </div>
        </div>
    );
};

export default loading;