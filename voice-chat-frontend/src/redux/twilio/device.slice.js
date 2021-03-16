import { DeviceActionTypes } from './device.action.types';




export const updateConnectionStatus = (status) => {
    return {
        type: DeviceActionTypes.UPDATE_CONNECTION_STATUS
    }
}

const INITIAL_DEVICE_STATE = {
    status : 'waiting',
}


export const deviceReducer = (state = INITIAL_DEVICE_STATE, action) => {
    switch(action.type){

        case DeviceActionTypes.UPDATE_CONNECTION_STATUS :
            return {
                ...state,
                status : action.payload.status
            }

        default : 
            return {
                ...state
            }
    }
}

// updateConnectionStatus(connection.status);