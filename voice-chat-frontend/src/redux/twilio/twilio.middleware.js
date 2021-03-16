import { TwilioMiddlewareActionTypes } from './twilio.middleware.action.types';
import { addUser, toggleUserMic, toggleUserListening } from '../users/users.slice';
import { initDevice, setupDevice} from './twilio.device.config';
const { Device } = require('twilio-client');


const TwilioMiddleware = store => {
    
    const device = initDevice(new Device());
    

    
    return next => action => {
        switch(action.type){

            case TwilioMiddlewareActionTypes.CONNECT_TO_TWILIO :
                //connect to twilio device here
                
                setupDevice(device);
                
                store.dispatch(addUser(action.payload.formData));
                break;
            case TwilioMiddlewareActionTypes.TOGGLE_MIC :
                //do twilio thing here;

                store.dispatch(toggleUserMic());
                break;
            case TwilioMiddlewareActionTypes.TOGGLE_LISTENING :
                //do twilio thing here;
                store.dispatch(toggleUserListening());
                break;    

            default: 
                break;
        }
        next(action);
    }

}

export default TwilioMiddleware







export const connectToTwilio = (formData) => {
    console.log('connecting action');
    return {
        type : TwilioMiddlewareActionTypes.CONNECT_TO_TWILIO,
        payload : {
            formData,
        }
    }
}


export const toggleMic = () => {
    
    return {
        type : TwilioMiddlewareActionTypes.TOGGLE_MIC,
    }
}

export const toggleListening = (id) => {
   
    return {
        type : TwilioMiddlewareActionTypes.TOGGLE_LISTENING,
    }
}


// want to join from here


// setup(event) {
//     // prevents form submission and page refresh
//     event.preventDefault();
//   }


    // device.on('incoming', connection => {
    //     // immediately accepts incoming connection
    //     connection.accept();
    
    //     this.setState({
    //       status: connection.status()
    //     });
    //   });
    
    //   device.on('ready', device => {
    //     this.setState({
    //       status: "device ready",
    //       ready: true
    //     });
    //   });
    
    //   device.on('connect', connection => {
    //     this.setState({
    //       status: connection.status()
    //     });
    //   });
    
    //   device.on('disconnect', connection => {
    //     this.setState({
    //       status: connection.status()
    //     });
    //   });
