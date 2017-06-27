import * as type from '../constants/ActionTypes';

export default function friends(state = [], action){
    switch(action.type){
        case type.ADD_FRIEND: 
            return [
                ...state,
                { friendId: action.id, name: action.name, image: action.image, isBestFriend: action.isBestFriend }
            ];
        case type.DELETE_FRIEND: 
            return state.filter(friend => friend.id !== action.id);
        default: 
            return state;
    }
}
