import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },  
  acord: {
    opacity: 0.95,
    marginBottom: 2,
  },
  heading0: {
    width: '7%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(12),
    marginRight: 15,
    flexBasis: '65.33%',
    flexShrink: 0,
    color: "black",
  },
  heading2: {
    fontSize: theme.typography.pxToRem(8),
    flexBasis: '53.33%',
    flexShrink: 0,
    color: "GREY",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(3),
    color: theme.palette.text.secondary,
    color: "black",
  },
p: {
  fontSize: theme.typography.pxToRem(12),
  flexBasis: '95%',
  flexShrink: 0,
  borderRadius: 1,
  color: "black",
},
}));

export const CartitaGeoM = (props) => {
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

          <Typography className={classes.secondaryHeading}>{props.cv.tiempo}</Typography>
        </AccordionSummary>

        <AccordionDetails>
        <Typography className={classes.p}>
        {props.cv.otros}
        <br />
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
