import React from 'react';
import friends from '../../data/friends.json'

import Image from 'next/image';
import Call from '../../../assets/call.png'
import Text from '../../../assets/text.png'
import Video from '../../../assets/video.png'



const FriendDetailPage = async ({ params }) => {

    const { id } = await params;

    const friend = friends.find((f) => f.id === parseInt(id));

    if (!friend) {
        return <h2 className='text-center mt-10 font-bold text-4xl'>Friend not found</h2>
    }
    else {
        const statusColor = friend.status === "overdue" ? "bg-red-100 text-red-600"
            : friend.status === "almost due"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-green-100 text-green-600";

        const tagColor = friend.tag === "work" ? "bg-blue-100 text-blue-600"
            : friend.tag === "family"
                ? "bg-purple-100 text-purple-600"
                : "bg-blue-100 text-blue-600";

        return (
            <div className='md:w-8/12 flex flex-col md:flex-row gap-6 p-6 mx-auto shadow-lg rounded-lg mt-10'>
                {/* left side */}
                <div>
                    <div className='text-center lg:max-w-md mx-auto p-5 mr-10'>
                        {/* left content */}
                        <div>
                            <img src={friend.picture} alt={friend.name} className='w-20 h-20 rounded-full mx-auto' />
                            <h2 className='text-lg font-semibold mt-2'>{friend.name}</h2>
                            <div className={`mt-1 px-2 w-20 mx-auto py-1 text-xs rounded-full ${statusColor}`}>
                                {friend.status}
                            </div>
                            <div className={`mt-1 px-2 w-20 mx-auto py-1 text-xs rounded-full ${tagColor}`}>
                                {friend.tag}
                            </div>
                            <p className='text-gray-700 mt-3 font-semibold italic'>"{friend.note}"</p>
                            <p className='text-gray-700'>Preferred: {friend.preferred_contact}</p>
                        </div>
                        {/* actions */}
                        <div className='mt-6'>
                            <button className='w-full btn bg-gray-100 py-2 rounded'>
                                Snooze 2 weeks
                            </button>
                            <button className='w-full btn bg-gray-100 py-2 rounded'>
                                Archive
                            </button>
                            <button className='w-full btn text-red-500 bg-gray-100 py-2 rounded hover:bg-red-100'>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>

                {/* right side */}
                <div className='md:col-span-2 space-y-6 p-4 w-full mx-auto'>
                    {/* states */}
                    <div className='flex flex-col md:flex-row justify-between space-y-4  text-center gap-4'>
                        <div className='bg-white p-4 shadow rounded text-center'>
                            <h3 className='font-bold text-3xl'>{friend.days_since_contact}</h3>
                            <p className='text-gray-600'>Days Since Contact</p>
                        </div>
                        <div className='bg-white p-4 shadow rounded text-center'>
                            <h3 className='font-bold text-3xl'>{friend.goal}</h3>
                            <p className='text-gray-600'>Goal (Days)</p>
                        </div>
                        <div className='bg-white p-4 shadow rounded text-center'>
                            <h3 className='font-bold text-2xl'>
                                {new Date(friend.next_due_date).toDateString()}
                            </h3>
                            <p className='text-gray-600'>Next Due Date</p>
                        </div>
                    </div>
                    {/* relationship goal */}
                    <div className='bg-white p-4 items-center'>
                        <div>
                            <div className='mb-1 flex justify-between items-center'>
                                <h3 className='font-semibold text-[#244D3F]'>Relationship Goal</h3>
                                <a className='btn rounded-full text-xs'>Edit</a>
                            </div>
                            <p className='text-gray-600'>Connect every <b>{friend.goal}</b> days</p>
                        </div>
                        <div className='mt-6 shadow-lg border-t border-gray-200 pt-8'>
                                <h3 className='font-semibold text-[#244D3F]'>Quick Check-In</h3>

                            <div className='mt-2 flex justify-between text-center items-center md:w-1/2 mx-auto'>
                                <div className='p-3 shadow'>
                                    <button className='bg-gray-200 px-5 py-2 rounded hover:bg-gray-300'>
                                        <Image src={Call} alt="call" className='w-6 h-6 inline-block mr-2' />
                                        Call
                                    </button>
                                </div>
                                <div className='p-3 shadow'>
                                    <button className='bg-gray-200 px-5 py-2 rounded hover:bg-gray-300'>
                                        <Image src={Text} alt="text" className='w-6 h-6 inline-block mr-2' />
                                        Text
                                    </button>
                                </div>
                                
                                <div className='p-3 shadow'>
                                    <button className='bg-gray-200 px-5 py-2 rounded hover:bg-gray-300 '>
                                        <Image src={Video} alt="video" className='w-6 h-6 inline-block mr-2' />
                                        Video
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    };
}

export default FriendDetailPage;