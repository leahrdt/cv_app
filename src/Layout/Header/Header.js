import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink } from 'react-router-dom'


const inlineStyles = {
  activeLink: {
    color: 'white',
    fontSize: '25px',
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  boton: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contacto: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const Header = () => {

  const classes = useStyles();

  return (
      <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
          LEANDRO FERNANDEZ REINHARDT
          </Typography>

          <Button color="inherit">
          <NavLink to="/" exact className={classes.boton}>Geologo</NavLink>
          </Button>
          <Button color="inherit" >
          <NavLink to="/123" exact className={classes.boton}>Desarrollador</NavLink>
          </Button>



          <Button color="inherit">
          <NavLink to="/" exact className={classes.contacto}>Contacto  </NavLink>
          </Button>

        </Toolbar>
      </AppBar>
    </div>
  )
}

