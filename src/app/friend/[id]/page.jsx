import React from 'react';
import friends from '../../data/friends.json'

const FriendDetailPage = ({ params }) => {
    const { id } = params;
    const friend = friends.find((f) => f.id === parseInt(id));
    
    if (!friend) {
        return <h2 className='text-center mt-10 font-bold text-4xl'>Friend not found</h2>
    }
    const statusColor = friend.status === "overdue" ? "bg-red-100 text-red-600"
        : friend.status === "almost due"
            ? "bg-yellow-100 text-yellow-600"
            : "bg-green-100 text-green-600";

    return (
        <div>
            
        </div>
    );
};

export default FriendDetailPage;