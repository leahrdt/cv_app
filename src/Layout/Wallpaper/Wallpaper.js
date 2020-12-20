import React from 'react'
import Paper from '@material-ui/core/Paper';
import Image from '../Wallpaper/wallpaper.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paperContainer: {
        height: '1200px',
        opacity: 0.9,
        backgroundImage: `url(${Image})`,
        backgroundColor: 'black',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.9,
        
    }

}));


export const Wallpaper = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.paperContainer}>
        </Paper>
    )
}
