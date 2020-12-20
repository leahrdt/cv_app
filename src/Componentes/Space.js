import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

space: {
    marginLeft: '6%',
    marginRight: '6%',
    marginTop: '9%',
    Width: '100%',
    opacity: 1,
    },

});

export const Space = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography   className={classes.space} >
        </Typography>
        </div>
    )
}