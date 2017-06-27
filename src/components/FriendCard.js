import React from 'react';

const FriendCard = ({ friend }) => {
    return (
        <div className="panel panel-primary friend-card">
            <div className="panel-heading">
                <div className="panel-header-component">
                    {friend.name}
                </div>
                <div className="panel-header-component pull-right">
                    <span> <i className="glyphicon glyphicon-star-empty"/> </span>
                    <span> <i className="glyphicon glyphicon-trash"/> </span>
                </div>
            </div>
            <div className="panel-body">
                <img src={friend.image} />
            </div>
        </div>
    );
}

export default FriendCard;