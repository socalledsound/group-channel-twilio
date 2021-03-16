
import React from 'react';
import { useDispatch } from 'react-redux'; 
import { toggleMic, toggleListening } from '../redux/twilio/twilio.middleware';
// import allActions from '../redux/twilio/twilio.middleware';
// import WithToggle from './WithToggle';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOff from '@material-ui/icons/VolumeOff';
import {
    Grid,
  } from "@material-ui/core";
const styles = {
    gridItem : {},
    iconSmall : {fontSize: 40, marginLeft: 20},
}

const AudioControls = ({user, self}) => {
    console.log(user);
    const dispatch = useDispatch();

        return  self ? 
        <Grid item style={styles.gridItem}>
            {user.mic ? 
                 <MicIcon style={styles.iconSmall} onClick={() => dispatch(toggleMic())}/>
                :
                 <MicOffIcon style={styles.iconSmall} onClick={() => dispatch(toggleMic())}/>
           }
            {user.listening ? 
                <VolumeUp style={styles.iconSmall} onClick={() => dispatch(toggleListening())}/>
                :
                <VolumeOff style={styles.iconSmall} onClick={() => dispatch(toggleListening())}/>
            }
        </Grid>
        
            :

           
                <Grid item style={styles.gridItem}>
                    {user.mic ? 
                        <MicIcon style={styles.iconSmall} />
                        //<MicIcon style={size === 'large' ? styles.iconLarge : styles.iconSmall}/>
                        :
                        <MicOffIcon style={styles.iconSmall} />
                        // <MicOffIcon style={size === 'large' ? styles.iconLarge : styles.iconSmall}/>
                }
                    {user.listening ? 
                        <VolumeUp style={styles.iconSmall}/>
                        :
                        <VolumeOff style={styles.iconSmall}/>
                    }
                </Grid>
             
}
 
export default AudioControls;