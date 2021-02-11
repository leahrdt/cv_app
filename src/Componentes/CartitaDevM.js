import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 'auto',
//     margin: 5,
//   },  
//   acord: {
//     backgroundColor: '#404040',
//     opacity: 0.95,
//     marginBottom: 3,
    
    
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(17),
//     flexBasis: '63.33%',
//     flexShrink: 0,
//     borderRadius: 1,
//     color: "white", 
        
//   },
//   secondaryHeading: {
//     fontSize: theme.typography.pxToRem(17),
//     color: theme.palette.text.secondary,
//     color: "black",
    
//     animation: 'lineal 5s linear alternate infinite',
//   },
// p: {
//   fontSize: theme.typography.pxToRem(17),
//   flexBasis: '100%',
//   flexShrink: 0,
//   borderRadius: 1,
//   color: "white",
  
// },
// }));

import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    margin: 5,
  },  
  acord: {
    opacity: 0.95,
    
 backgroundColor: '#484848',
  },
  heading0: {
    width: '7%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    marginRight: 15,
    flexBasis: '65.33%',
    flexShrink: 0,
    color: "white",
  },
  heading2: {
    fontSize: theme.typography.pxToRem(12),
    flexBasis: '53.33%',
    flexShrink: 0,
    color: "#919191",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(10),
    color: theme.palette.text.secondary,
    color: "white",
  },
  titulo4: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    color: "#999999",
    
    marginLeft: '3%',
  },
p: {
  fontSize: theme.typography.pxToRem(14),
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
        <ListItemText className={classes.heading0}
                    primary={
                        <React.Fragment>
                            <Typography 
                            className={classes.heading}
                            color="Black"
                            >
                            {props.cv.titulo}
                            </Typography>
                        </React.Fragment>}
                    secondary={
                    <React.Fragment>
                        <Typography
                        variant="subtitle2"
                        className={classes.heading2}
                        color="textPrimary"
                        >
                        {props.cv.lugar}
                        </Typography>
                    </React.Fragment>}
        />
        </AccordionSummary>

        <Typography className={classes.titulo4} color="textSecondary" gutterBottom>
        {props.cv.otros}
        </Typography>

        <AccordionDetails>
          <Typography className={classes.p}>

          {props.cv.detalle1}
        <br />
          {props.cv.detalle2}
        <br />
        {props.cv.detalle3}
        <br />
        {props.cv.detalle4}
        <br />
        {props.cv.detalle5}
        <br />
        <Link href={props.cv.detalle6}  color="inherit">
    {props.cv.detalle6}
        </Link>
</Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>



    )
}
