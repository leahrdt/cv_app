import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  heading: {
    color: 'white',
    padding:0,
    textAlign: 'center',
    opacity: 0.9,
    backgroundColor: '#515151',
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightRegular,
      fontFamily: 'JetBrains Mono',
      padding: 8,
    },
}));


export const TitulosM = (props) => {
  
  const classes = useStyles();

    return (
    <div>

        <Typography className={classes.heading}>{props.titulo} </Typography>
        </div>
    )
}


