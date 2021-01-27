import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Apartment from '@material-ui/icons/Apartment';
import EmojiFlags from '@material-ui/icons/EmojiFlags';
import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import DriveEta from '@material-ui/icons/DriveEta';
import ChildFriendly from '@material-ui/icons/ChildFriendly';
import Assignment from '@material-ui/icons/Assignment';
import Language from '@material-ui/icons/Language';
import House from '@material-ui/icons/House';

const useStyles = makeStyles((theme) => ({
roottt: {
  width: 'auto',
  margin: 5,
  padding: 0,
  opacity: 0.95,
},
media: {
  width: '45%',
  height: '45%',
  marginLeft: '28%',
  marginTop: '5%',
  marginBottom: '5%',
  borderRadius: 100,
},
Titulo3: {
  height: 50,
  textAlign: 'center',
  color: 'white',
  backgroundColor: '#303030',
},
heading: {
  textSize: 21,
  padding:0,
  width: '100%',
  fontSize: theme.typography.pxToRem(15),
  fontWeight: theme.typography.fontWeightRegular,},
roott: {
  width: '100%',
  background: '#4c5c68',
  padding: '0px',},
  root: {
    width: 'auto',
    color: 'white',
    background: 'transparent',
  },

text: {
  textAlign: '  ',
  background: '4c5c68',
},
botonExpandex: {
  color: 'red',
  backgroundColor: 'red',
}
,}));


export const MisDatosM = (props) => {
    const classes = useStyles();

    return (
    <div>

<CardActionArea>
    <CardMedia

    className={classes.media}
    component="img"
    image= {props.pic}
    /> 
</CardActionArea>

      <Accordion className={classes.roottt}>
      <AccordionSummary
          className={classes.Titulo3}
          expandIcon={<ExpandMoreIcon 
            classes={{
              root: classes.root, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
            />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          
          <Typography className={classes.heading}><h3>{props.titulo}</h3></Typography>
        </AccordionSummary>
        <List className={classes.roott}>
        

        
        <Divider variant="inset" component="li" />




<List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <EmojiFlags />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.text} primary="Nacionalidad" secondary="Argentina" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Apartment />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.text} primary="Lugar de Residencia" secondary="CABA" />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <House />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.text}  primary="Lugar de Nacimiento" secondary="Trenque Lauquen"  />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FlightTakeoff />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.text}  primary="Posiilidad de Reencidencia" secondary="Si"  />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Assignment />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.text}  primary="Fecha de Nacimiento" secondary="20 de Septiembre, 1990"  />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <DriveEta />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.text}  primary="Licencia de Conducir" secondary="Si - A1,4 -B2"  />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ChildFriendly />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.text}  primary="Hijos" secondary="No"  />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Language />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.text}  primary="Idiomas" secondary="Ingles - Intermedio (experiencia en lectura y comunicacion)"  />
      </ListItem>
    </List>

        <Divider variant="inset" component="li" />

    </List>
    
    </Accordion>
            
        </div>
    )
}
