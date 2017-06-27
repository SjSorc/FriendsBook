import * as type from '../constants/ActionTypes';

export default function friends(state = [], action){
    switch(action.type){
        case type.ADD_FRIEND: 
            return [
                ...state,
                { friendId: action.id, name: action.name, image: action.image, isBestFriend: action.isBestFriend }
            ];
        case type.DELETE_FRIEND: 
            return state.filter(friend => friend.friendId !== action.id);
        case type.TOGGLE_STARRED_FRIEND:
            return state.map( friend => {
                if(friend.friendId == action.id){
                    return {
                        ...friend,
                        isBestFriend: !friend.isBestFriend
                    }
                } else {
                    return friend;
                }
            });
        default: 
            return state;
    }
}
