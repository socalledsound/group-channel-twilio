import { UsersActionTypes } from './users.action.types';


const INITIAL_USERS_STATE = {
    users : [{username: 'chris', mic: false, listening: false, id: '000293784'}],
    currentUser: null,
}



export const addUser = (user) => {
    return {
        type : UsersActionTypes.ADD_USER,
        payload: {
            user
        }
    }
}

export const removeUser = (id) => {
    return {
        type : UsersActionTypes.REMOVE_USER,
        payload: {
            id
        }
    }
}

export const toggleUserMic = () => {

    return {
        type : UsersActionTypes.TOGGLE_USER_MIC,
    }
}

export const toggleUserListening = () => {
    return {
        type : UsersActionTypes.TOGGLE_USER_LISTENING,
    }
}


export const usersReducer = (state = INITIAL_USERS_STATE, action) => {
    switch(action.type){

        case UsersActionTypes.ADD_USER :
            const increasedUsers = [...state.users].concat([action.payload.user]);
            return {
                ...state,
                users: increasedUsers,
                currentUser: action.payload.user,
            }
        case UsersActionTypes.REMOVE_USER :
            const decreasedUsers = [...state.users].filter(user => user.id !== action.payload.id);
            console.log(decreasedUsers);
            return {
                    ...state,
                    users: decreasedUsers,
                    currentUser : null,
                }
        case UsersActionTypes.TOGGLE_USER_MIC :
                
                const updatedCurrentUserMic = state.currentUser;
                updatedCurrentUserMic.mic = !state.currentUser.mic;
                const updatedUsersMics = [...state.users]
                                                .filter(user => user.id !== state.currentUser.id)
                                                .concat([updatedCurrentUserMic]);
                
                return {
                    ...state,
                     users : updatedUsersMics,
                    currentUser : updatedCurrentUserMic,
                }

        case UsersActionTypes.TOGGLE_USER_LISTENING :
            const updatedCurrentUserListening = state.currentUser;
            updatedCurrentUserListening.listening = !state.currentUser.listening;
            const updatedUsersListening = [...state.users]
                                                .filter(user => user.id !== state.currentUser.id)
                                                .concat([updatedCurrentUserListening]);
                return {
                    ...state,
                    users : updatedUsersListening,
                    currentUser : updatedCurrentUserListening,
                }        
        default : 
        return {
            ...state
        }
    }
}