import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  heading: {
    color: 'white',
    padding:0,
    textAlign: 'center',
    backgroundColor: '#313131',
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightRegular,
      fontFamily: 'JetBrains Mono',
      padding: 8,
    },
}));


export const TitulosDevM = (props) => {
  
  const classes = useStyles();

    return (
    <Fragment>
        <Typography className={classes.heading} >{props.titulo}  </Typography>
        </Fragment>
    )
}


