import React from 'react';
import { useSelector } from 'react-redux';

import {
  Grid,
  Card,
} from "@material-ui/core";

import Join from './components/Join';
import Conference from './components/Conference';


const styles = {
  appContainer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
  mainCard: { padding: 40 },
};



const App = () => {

    const currentUser = useSelector(state => state.users.currentUser);
    const status = useSelector(state => state.device.status)
  
    return ( 
       

            <Grid
              style={styles.appContainer}
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              
              <Card style={styles.mainCard} elevation={10}>
                
                
                 {currentUser ?
                 
                      <Conference />
                    
                    :
    
                      <Join />
                   
                 }
                    
              </Card>
              <Card>
                {status}
              </Card>
            </Grid>
            
     );
}
 
export default App;
