import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendCard from '../components/FriendCard';
import * as FriendModel from '../actions/FriendsAction';

let FriendList = ({ dispatch, friends }) => {
    return (
        <div>
            {friends.map(friend => <FriendCard key={friend.friendId} friend={friend} 
                onDelete={() => dispatch(FriendModel.DeleteFriend(friend.friendId))}
                toggleStarredFriend={() => dispatch(FriendModel.ToggleStarredFriend(friend.friendId))} /> )}
        </div>
    );
}

function mapStateToProps(state){
    return {
        friends: state.friends
    }
}

FriendList = connect(mapStateToProps, null)(FriendList);

export default FriendList;

