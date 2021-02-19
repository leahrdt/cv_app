import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {NavLink } from 'react-router-dom'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Link from '@material-ui/core/Link';



const inlineStyles = {
  activeLink: {
    color: 'white',
    textDecoration: 'none',
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
  botones: {
    marginLeft: 44,
  },

  boton: {
    backgroundColor:'white',
    color: 'white',
    background: 'linear-gradient(45deg, #313131 20%, #414141 90%)',
    border: 2,
    borderRadius: 20,
    borderColor: 'white',
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    
    
    '& > *': {
      margin: theme.spacing(1),
    },

  },
  contacto: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botonname: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'3%',
  },
  button: {
    margin: theme.spacing(1),
  },


  botonContacto:{
    backgroundColor:'white',
    color: 'white',
    background: 'linear-gradient(45deg, #1b5954 5%, #43bf53 99%)',
    border: 2,
    borderRadius: 20,
    borderColor: 'white',
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    position:'fixed',
	  width:'auto',
	  height:'auto',
	  bottom:'30px',
	  right:'70px',
	  marginTop:'16px',
  },

  link:{
    color:'white',
    background: 'white',
  }


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

          <div className={classes.botones}>
          <Button color="inherit">
          <NavLink to="/123" exact className={classes.boton}>
          <Typography className={classes.botonname}>
          Perfil: Geologo
          </Typography>
          </NavLink>
          </Button>
          <Button color="inherit" >
          <NavLink to="/" exact className={classes.boton}>

          <Typography className={classes.botonname}>
          Perfil: Desarrollador
          </Typography>

          </NavLink>
          </Button>


          <Button
        variant="contained"
        className={classes.botonContacto}
        
        endIcon={<WhatsAppIcon />}
      ><Link color='inherit' href="https://api.whatsapp.com/send?phone=5492392536414&text=Hola%20." >
          Contacto
          </Link> 
      </Button>

          
          

          

          </div>

      
        </Toolbar>
      </AppBar>
    </div>
  )
}

