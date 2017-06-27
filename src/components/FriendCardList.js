import React, { Component } from 'react';
import FriendCard from './FriendCard';

const FriendCardList = ({ friends }) => {
    return (
        <div>
            {friends.map(friend => <FriendCard key={friend.friendId} friend={friend} />)}
        </div>
    );
}

export default FriendCardList;