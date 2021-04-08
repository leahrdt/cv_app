import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  heading: {
      color: 'white',
      padding:0,
      textSize: 555,
      textAlign: 'center',
      fontSize: theme.typography.pxToRem(50),
      fontWeight: theme.typography.fontWeightRegular,
      fontFamily: 'JetBrains Mono',
      padding: 12,
    },
}));


export const TitulosDev = (props) => {
  
  const classes = useStyles();

    return (
    <Fragment>
        <Typography className={classes.heading} >{props.titulo}  </Typography>
        </Fragment>
    )
}


