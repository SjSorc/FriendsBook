import * as type from '../constants/ActionTypes';

let nextFriendId = 0;
const imageUrl = 'images/friend.png';

export function AddFriend(name){
    return {
        type:type.ADD_FRIEND,
        name,
        id: nextFriendId++,
        image: imageUrl,
        isBestFriend: false
    }
}

export function DeleteFriend(id){
    return {
        type: type.DELETE_FRIEND,
        id
    }
}

export function ToggleStarredFriend(id){
    return {
        type: type.TOGGLE_STARRED_FRIEND,
        id
    }
}