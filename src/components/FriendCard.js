import React from 'react';

const FriendCard = ({ friend, onDelete, toggleStarredFriend }) => {
    let starredComponent;
    if (friend.isBestFriend) {
        starredComponent = <span onClick={toggleStarredFriend}> <i className="glyphicon glyphicon-star" /> </span>
    } else {
        starredComponent = <span onClick={toggleStarredFriend}> <i className="glyphicon glyphicon-star-empty" /> </span>
    }
    return (
        <div className="panel panel-primary friend-card">
            <div className="panel-heading">
                <div className="panel-header-component">
                    {friend.name}
                </div>
                <div className="panel-header-component pull-right">
                    { starredComponent }
                    <span onClick={onDelete}> <i className="glyphicon glyphicon-trash"/> </span>

                </div>
            </div>
            <div className="panel-body">
                <img src={friend.image} />
            </div>
        </div>
    );
}

export default FriendCard;