import React from 'react';
import FriendsbookNav from '../components/FriendsbookNav';
import FriendList from './FriendList';

const App = () => {
    return(
        <div>
            <FriendsbookNav />
            <FriendList />
        </div>
    )
}

export default App;