import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../redux/users/users.slice';
import {
    Grid,
    Button,
  } from "@material-ui/core";

import UsersList from './UsersList';


  const styles = {
    header: {},
    grid: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
    card: { padding: 40 },
    textField: { width: 300 },
    gridItem: { paddingTop: 12, paddingBottom: 12 },
    button: { width: 300, marginBottom : '40px'},
    icon : { fontSize: 120, marginLeft: 20}
  };



const Conference = () => {


    const users = useSelector(state => state.users.users);
    const currentUser = useSelector(state => state.users.currentUser);
    const dispatch = useDispatch();

    return ( 
        
        <Grid item style={styles.gridItem}>
            <UsersList users={users} currentUser={currentUser}/>
            
            <Button
            color="primary"
            variant="contained"
            style={styles.button}
            onClick={() => dispatch(removeUser(currentUser.id))}
            >
            leave voice channel
            
            </Button>

        </Grid>

     );
}
 
export default Conference;
