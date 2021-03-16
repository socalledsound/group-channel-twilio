import React from 'react'
import AudioControls from './AudioControls';
import {
    Grid,
    Card,
    Typography,
  } from "@material-ui/core";

const listItemStyles = {
    self : {
        marginBottom: '40px', 
        padding: '20px',  
        border: 'red 3px solid',   
        },
    otherUser : {
        marginBottom : '40px',
        padding: '20px', 

        color: 'grey', 
    }
}


const UserList = ({users, currentUser}) => {

    return ( 

        <Grid>
            <Card>
            {users && users.length > 0 ? 
                users.map((user, idx) => {
                    const self = user.id === currentUser.id ? true : false;
                    console.log(user.id);
                    return (
                        <Grid key={user.id} direction="row" container style={ self ? listItemStyles.self : listItemStyles.otherUser}>
                            <Grid item>
                            <Typography >{user.username}</Typography>
                            </Grid>
                            <Grid item>
                            <AudioControls user={user} styles={{marginLeft : '60px'}} self={self}/>
                            </Grid>
                        </Grid>
                )
                }) 
                :

                <Typography>
                    ...loading
                </Typography>
                
        }
            </Card>
        </Grid>

     );
}
 
export default UserList;