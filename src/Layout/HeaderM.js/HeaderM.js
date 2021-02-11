import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Link from '@material-ui/core/Link';

import Image2 from '../HeaderM.js/dev.png'

import Image1 from '../HeaderM.js/geo.png'

import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const image = [
  {
    url: Image2,
    title: '</Desarrollador>',
    width: '45%',
  },
  {
    url:Image1,
    title: 'Geologo',
    width: '45%',
  },
];

const useStyles = makeStyles((theme) => ({
  roott: {
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


  botonPlace: {
    flexGrow: 1.5,
    alignContent: 'center',
    
  },
  boton: {
    margin: 5,
    textSize: 90,
    textAlign: 'center',
    color: 'white',
    borderColor: 'white',
    borderRadius: 100,
    width: '45%',
    boxShadow: '1px 1px 1px 1px #424242',
    
  },
  boton2: {
    textDecoration: 0,
    color: 'white',
    
  },


  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 100,
    [theme.breakpoints.down('xs')]: {
      width: '50% !important', // Overrides inline-style
      height: 60,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '2px solid currentColor',
        height: 20,
        marginTop: 0,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 2,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: 10,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },

  extendedIcon: {
    marginRight: theme.spacing(1),
    
    position: 'fixed',
    marginLeft: '2%',
    marginTop: '125%',
    zIndex: 2,
    
  },

  botonContacto:{
    backgroundColor:'white',
    color: 'white',
    background: 'linear-gradient(45deg, #1b5954 5%, #43bf53 99%)',
    border: 10,
    borderRadius: 99,
    borderColor: 'black',
    maxWidth: 'auto',
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    position:'fixed',
	  width:'auto',
	  height:'auto',
	  bottom:'30px',
	  right:'25px',
	  marginTop:'16px',
    zIndex: '2',
  },

  link:{
    height: 22,

  }
}));


export const HeaderM = () => {

    const classes = useStyles();
    return (
        <div className={classes.roott}>

          
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
                
            </Typography>
            </Toolbar>
        </AppBar>



        <div className={classes.root}>

        <ButtonBase
          focusRipple
          key={image[0].title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image[0].width,
          }}
        >
          
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image[0].url})`,
            }}
          />
          <span className={classes.imageBackdrop} />

          
          <span className={classes.imageButton}>
            
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              <NavLink to="/" className={classes.boton2}>{image[0].title}</NavLink>
              <span className={classes.imageMarked} />
              
            </Typography>
          </span>
          
        </ButtonBase>
        
            
        <ButtonBase
          focusRipple
          key={image[1].title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image[1].width,
          }}
        >
          
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image[1].url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              
          <NavLink to="/123" exact className={classes.boton2}>Geologo</NavLink>
              <span className={classes.imageMarked} />
            </Typography>
            
          </span>

        </ButtonBase>
        

        </div>

        <Link color='inherit' className={classes.link} href="https://api.whatsapp.com/send?phone=5492392536414&text=Hola%21%20Leandro%20." >
        <Button
        variant="contained"
        className={classes.botonContacto}
        
      >
        <WhatsAppIcon fontSize="large" />
      </Button>
      </Link> 
        </div>
    )
}
