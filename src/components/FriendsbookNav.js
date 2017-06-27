import React from 'react';
import { Navbar } from 'react-bootstrap';
import AddFriendForm from '../containers/AddFriend';

const FriendsbookNav = ({ onButtonClick }) => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">FriendsBook</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
           <AddFriendForm />
        </Navbar.Collapse>
    </Navbar>
);

export default FriendsbookNav;