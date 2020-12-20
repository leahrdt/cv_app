import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    heading: {
      
        padding:0,
        textSize: 333,
        textAlign: 'center',
        marginLeft: '8%',
        fontSize: theme.typography.pxToRem(35),
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: 'JetBrains Mono',
        padding: 11,
      },
  }));


export const Titulos = (props) => {
  
  const classes = useStyles();

    return (
    <div>

        <Typography className={classes.heading}>{props.titulo} </Typography>
        </div>
    )
}


