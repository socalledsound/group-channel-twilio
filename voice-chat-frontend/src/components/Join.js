import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
// import { addUser } from '../redux/users/users.slice';
import { connectToTwilio } from '../redux/twilio/twilio.middleware';
import { create_UUID } from '../utils';
import {
    Grid,
    TextField,
    Button,
  } from "@material-ui/core";
// import { connectToTwilio } from '../redux/twilio/twilio.middleware';



  const styles = {
    header: {},
    grid: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
    card: { padding: 40 },
    textField: { width: 300 },
    gridItem: { paddingTop: 12, paddingBottom: 12 },
    button: { width: 300, marginBottom : '40px'},
    icon : { fontSize: 120, marginLeft: 20}
  };


const Join = () => {
    const dispatch = useDispatch();
    const useForm = (initialState = {}, onSubmit) => {

        
        const [formData, setFormData] = useState(initialState);
      
        const handleInputChange = (e) => {
            setFormData({ 
                ...formData, 
                [e.target.name]: e.target.value, 
                mic: false, 
                listening: false, 
                id: create_UUID(), 
            })
        }
      
        const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit?.(formData);
        }
      
        return { formData, handleInputChange, handleSubmit };
      }
    
    
    
      const { formData, handleInputChange, handleSubmit } = useForm(
        {
            username: " ",
        },
        (formData) => dispatch(connectToTwilio(formData))
    );
    
    const { username } = formData;

    return ( 
        <Grid item style={styles.container}>
            <form onSubmit={handleSubmit}>
            
                <Grid>
                    <TextField
                        name="username"
                        required
                        style={styles.textField}
                        label="username"
                        placeholder="please enter your name"
                        variant="outlined"
                        type="text"
                        value={username}
                        onChange={handleInputChange}
                    />
        
                </Grid>

                <Grid item style={styles.gridItem}>

                    <Button
                        color="primary"
                        variant="contained"
                        style={styles.button}
                        type="submit"
                    >
                    join voice channel
                    </Button>
    
                </Grid>
            </form>
        </Grid>

     );
}
 
export default Join

