import axios from 'axios';
import { updateConnectionStatus } from './device.slice';

const TWILIO_TOKEN_URL = 'https://voice-chat-new-9513-dev.twil.io/token';


 export const initDevice = device => {

        device.on('incoming', connection => {
                // immediately accepts incoming connection
                connection.accept();
                updateConnectionStatus(connection.status);
              });
            
        device.on('ready', device => {
                updateConnectionStatus("device ready");
                //updateReady(true);
              //   this.setState({
              //     status: "device ready",
              //     ready: true
              //   });
              });
            
        device.on('connect', connection => {
                updateConnectionStatus(connection.status);
              });
            
        device.on('disconnect', connection => {
                // device.disconnectAll()
                updateConnectionStatus(connection.status);
              }); 

        return device          
 }
  
   

export const setupDevice = (device) => {
        const room = 'room1';
        
        
        axios.get(`${TWILIO_TOKEN_URL}?room=${room}`)
        //     .then(response => response.json())
        .then(response => {
                console.log(response);
                const room = 'room1';
                device.setup(response.data.accessToken);
                device.connect({room : room});
                console.log(room);
                // 
        })
        //     .then(data => {
        //         console.log(data);
        //         //device.setup(data.accessToken);
        //         //device.audio.incoming(false);
        //         //device.audio.outgoing(false);
        //         //device.audio.disconnect(false);
        //     })
    }   