import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendCardList from '../components/FriendCardList';

function mapStateToProps(state){
    return {
        friends: state.friends
    }
}

const FriendList = connect(mapStateToProps, null)(FriendCardList);

export default FriendList;

