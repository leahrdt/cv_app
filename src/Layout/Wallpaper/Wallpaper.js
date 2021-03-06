import React from 'react'
import Paper from '@material-ui/core/Paper';
import Image from '../Wallpaper/wallpaper.png'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        height: '1500px',
        backgroundImage: `url(${Image  })`,
        backgroundColor: 'black',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 1,
        
    }

}));


export const Wallpaper = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.paperContainer}>
        </Paper>
    )
}
