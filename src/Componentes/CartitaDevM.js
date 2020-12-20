import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },  
  acord: {
    backgroundColor: '#212121',
    opacity: 0.95,
    marginBottom: 2,
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '63.33%',
    flexShrink: 0,
    borderRadius: 1,
    color: "white",
    animationName: 'mover', /*mas abajo esta hecho el keyframes que dice que va a pasar antes y despues*/
        animationDuration: '5s', /*cuanto duras*/
        animationDelay: '1.5s', /*el delay hasta que arranque*/
        animationIterationCount: 3,
        animationTimingFunction: 'ease',  
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(10),
    color: theme.palette.text.secondary,
    color: "black",
    
    animation: 'lineal 5s linear alternate infinite',
  },
p: {
  fontSize: theme.typography.pxToRem(12),
  flexBasis: '95%',
  flexShrink: 0,
  borderRadius: 1,
  color: "white",
},
}));

export const CartitaDevM = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    // {props.cv.titulo}
    return (

      <div className={classes.root}>
      <Accordion className={classes.acord} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={props.cv.logo}  />
        </ListItemAvatar>
          <Typography className={classes.heading}>{props.cv.titulo}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography className={classes.p}>
          {props.cv.detalle1}
        <br />
        {props.cv.detalle2}
        <br />
        {props.cv.detalle3}
        <br />
        {props.cv.detalle4}
</Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>



    )
}
