import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/users/usersSlice';
import { create_UUID } from '../utils';
import {
    Grid,
    TextField,
    Card,
    AppBar,
    Toolbar,
    Typography,
    Button,
  } from "@material-ui/core";

import UsersList from './UsersList';
import AudioControls from './AudioControls';

// const activeUsers = ['chris', 'tim', 'whatever', 'someone else'];


const styles = {
    header: {},
    grid: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
    card: { padding: 40 },
    textField: { width: 300 },
    gridItem: { paddingTop: 12, paddingBottom: 12 },
    button: { width: 300 },
    icon : { fontSize: 120, marginLeft: 20}
  };






const VoiceChat = () => {

  const users = useSelector(state => state.users.users);
  const currentUser = useSelector(state => state.users.currentUser);

  const dispatch = useDispatch();

  // const [mic, toggleMic] = useState(false);
  // const [listening, toggleListening] = useState(false);
  //  const [roomJoined, toggleRoom]  = useState(false);


  const useForm = (initialState = {}, onSubmit) => {
    const [formData, setFormData] = useState(initialState);
  
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value, mic: false, listening: false, id: create_UUID() })
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit?.(formData);
        // toggleRoom(!roomJoined);
    }
  
    return { formData, handleInputChange, handleSubmit };
  }



  const { formData, handleInputChange, handleSubmit } = useForm(
    {
        username: " ",
    },
    (formData) => dispatch(addUser(formData))
);


    // useEffect(() => {
    //   dispatch(removeUser(currentUser.id));
    // })



  const { username } = formData;

    return ( 
        <div >
             {/* <AppBar style={styles.header} elevation={10}>
              <Toolbar>
                <Typography variant="h6">
                  Chat App with Twilio Programmable Chat and React
                </Typography>
              </Toolbar>
            </AppBar> */}

            <Grid
              style={styles.grid}
              container
              direction="column"
              justify="center"
              alignItems="center">
              <Card style={styles.card} elevation={10}>
                
                
                 {currentUser ?
                  <Grid item style={styles.gridItem}>
                    <UsersList users={users}/>
                    
                    <Button
                      color="primary"
                      variant="contained"
                      style={styles.button}
                      onClick={() => dispatch(removeUser(currentUser.id))}
                      >
                      leave voice channel
                      
                    </Button>
                    
                     <AudioControls user={currentUser} size='large' />
                    </Grid>

                    :

                    <Grid item style={styles.gridItem}>
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

                          // onChange={this.handleChange}
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
                 }
                    


              </Card>
            </Grid>
            </div>
     );
}
 
export default VoiceChat;