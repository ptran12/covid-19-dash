import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return "Loading...."
    }
    console.log(confirmed);
    return(
       <div className = {styles.container}>
           <Grid container spacing={3} justify="center">
                <Grid item component={Card}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">{confirmed.value}</Typography>
                        <Typography color="textSecondary">date filler</Typography>
                        <Typography variant="body2"># of active cases</Typography>
                    </CardContent>
                </Grid>
                {/* Recovered */}
                <Grid item component={Card}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">data filler</Typography>
                        <Typography color="textSecondary">date filler</Typography>
                        <Typography variant="body2"># of recoveries</Typography>
                    </CardContent>
                </Grid>
                {/* Deaths */}
                <Grid item component={Card}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">data filler</Typography>
                        <Typography color="textSecondary">date filler</Typography>
                        <Typography variant="body2"># of deaths</Typography>
                    </CardContent>
                </Grid>
           </Grid>
       </div>
    )
}

export default Cards;