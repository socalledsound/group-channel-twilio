import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMic, toggleListening } from '../redux/twilio/twilio.middleware';
const IconWithToggle = (WrappedComponent) => {

    const Toggle = ({isMic, ...otherProps}) => {
        const dispatch = useDispatch();
        return isMic ? (
            <WrappedComponent {...otherProps} onClick={() => dispatch(toggleMic())} />
        ) :
        (
            <WrappedComponent {...otherProps} onClick={() => dispatch(toggleListening())} />
        )

        }
 
    return Toggle
    
};
 
export default IconWithToggle;
