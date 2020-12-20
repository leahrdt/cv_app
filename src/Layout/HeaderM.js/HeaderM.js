import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
  subtitle: {
    backgroundColor: 'black',
    flexGrow: 1,
    textAlign: 'center',
  },
  barrabotones: {
    textAlign: 'center',
  },
  boton: {
    textDecoration:'none',
    flexGrow: 1,
    textSize: 90,
    textAlign: 'center',
    color: 'white',
    borderColor: 'white',
  },
}));


export const HeaderM = () => {

    const classes = useStyles();
    return (
        <div className={classes.root}>
        <AppBar position="fixed">
            <Toolbar>

            <Typography variant="h5" className={classes.title}>
                Leandro Fernandez Reinhardt 
            </Typography>
            </Toolbar>
        </AppBar>
        <AppBar position="static">
            <Toolbar>

            <Typography variant="h5" className={classes.title}>
                ¡¡¡ Piedra Libre !!!
            </Typography>
            </Toolbar>
        </AppBar>
        <AppBar position="static" className={classes.barrabotones}>
            <Toolbar className={classes.subtitle}>

            <Typography variant="h5" className={classes.boton}>
            <Button color="inherit" className={classes.boton}>
            <NavLink to="/" exact className={classes.boton}>Geologo</NavLink>
            </Button>
            <Button color="inherit" className={classes.boton}>
            <NavLink to="/123" exact className={classes.boton}>Desarrollador</NavLink>
            </Button>
            </Typography>
            </Toolbar>
        </AppBar>


        </div>
    )
}
