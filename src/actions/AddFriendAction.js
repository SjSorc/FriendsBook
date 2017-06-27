import * as type from '../constants/ActionTypes';

let nextFriendId = 0;
const imageUrl = 'images/friend.png';

export default function AddFriend(name){
    return {
        type:type.ADD_FRIEND,
        name,
        id: nextFriendId++,
        image: imageUrl,
        isBestFriend: false
    }
}