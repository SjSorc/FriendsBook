import * as type from '../constants/ActionTypes';

const FriendsReducer = (state = [], action) => {
    switch(action.type){
        case type.ADD_FRIEND: 
            return [
                ...state,
                { friendId: action.id, name: action.name, image: action.image, isBestFriend: false }
            ];
        case type.DELETE_FRIEND: 
            return state.filter(friend => friend.id !== action.id);

    }
}

export default FriendsReducers;