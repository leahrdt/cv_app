import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({

  acordion: {
    margin: 4,
    opacity: 0.9,
    padding: '0px',
    alignContent: 'center',
  },

  root: {
    marginRight: '4%',
    marginLeft: '4%',
    opacity: 0.95,
    padding: '0px',
    borderRadius: 0,
  },

  Titulo3: {
    height:'40%'},
    

  titulo4: {
    fontSize: 14,},


    rootCard: {
        borderColor: "white",
        backgroundColor: theme.palette.background.paper,
        marginTop: -20,
      },


    acord: {
        backgroundColor: 'red',
        height: 55,
        padding: '0px',
      },
      acordTop: {
        marginLeft: 0,
      },
    inline: {
      
      display: 'inline',
      color: 'black',
      
    },
    inlineOne: {
      
        color: 'Black',
    },
    heading: {
      
        padding:0,
        textSize: 11,
        textAlign: 'center',
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        
      },
  }));


export const Cartita = (props) => {
    const classes = useStyles();

    return (
    <Fragment>

<List className={classes.root}>
        
      <Accordion className={classes.acordion}>
        <AccordionSummary
        className={classes.Titulo3}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Divider className={classes.acordTop} variant="inset" component="li" />
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={props.cv.logo}  />
        </ListItemAvatar>
        <ListItemText
                    primary={
                        <React.Fragment>
                            <Typography
                            variant="H1"
                            marginBottom= "101px"
                            className={classes.inline}
                            color="Black"
                            fontSize= "111"
                            >
                            {props.cv.titulo}
                            </Typography>
                        </React.Fragment>}
                    secondary={
                    <React.Fragment>
                        <Typography
                        variant="subtitle2"
                        className={classes.inline}
                        color="textPrimary"
                        >
                        {props.cv.lugar}
                        </Typography>
                    </React.Fragment>}
        />

        </ListItem>

        </AccordionSummary>

        <Card className={classes.rootCard} variant="outlined">
      <CardContent>
        <Typography className={classes.titulo4} color="textSecondary" gutterBottom>
        {props.cv.otros}
        </Typography>
        
        <Typography variant="body2" component="p">
        {props.cv.detalle1}
        <br />
        {props.cv.detalle2}
        <br />
        {props.cv.detalle3}
        <br />
        {props.cv.detalle4}
        </Typography>
      </CardContent>
    </Card>
    </Accordion>


    </List>
</Fragment>
    )
}
