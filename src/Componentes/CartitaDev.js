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
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({

  acordion: {
    backgroundColor: '#313131',
    padding: '0px',
    alignContent: 'center',
    margin: 4,
  },

  root: {
    backgroundColor: '#313131',
    marginRight: '4%',
    marginLeft: '4%',
    opacity: 0.8,
    padding: '0px',
  },

  titulo4: {
    color: 'white',
    fontSize: 13,},


    rootCard: {
      backgroundColor: '#212121',
        borderColor: "#212121",
        marginTop: -20,
        height: 'auto',
      },
      CardContent:{
        backgroundColor: 'black',
        opacity: 0.95,
        borderRadius: -2,
      },


    acord: {
        borderColor: 'green',
      color: 'white',
        backgroundColor: 'red',
        height: 55,
        padding: '0px',
      },
      acordTop: {
        backgroundColor: 'red',
        marginLeft: 0,
      },
    titulo: {
      display: 'inline',
      color: 'white',
      fontSize: 19,
    },
    lugar: {
      display: 'inline',
      color: '#919191',
      fontSize: 15,
    },

    heading: {
        padding:0,
        textSize: 21,
        textAlign: 'center',
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },

      p: {
        color: 'white',
        
      },
  }));


export const CartitaDev = (props) => {
    const classes = useStyles();
    
  const preventDefault = (event) => event.preventDefault();

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
                            className={classes.titulo}
                            color="Black"
                            >
                            {props.cv.titulo}
                            </Typography>
                        </React.Fragment>}
                    secondary={
                    <React.Fragment>
                        <Typography
                        variant="subtitle1"
                        className={classes.lugar}
                        color="textPrimary"
                        >
                        {props.cv.lugar}
                        </Typography>
                        {props.cv.tiempo}
                    </React.Fragment>}
        />

        </ListItem>

        </AccordionSummary>

        <Card className={classes.rootCard} variant="outlined">
      <CardContent className={classes.CardContent}>
        <Typography className={classes.titulo4} color="textSecondary" gutterBottom>
        {props.cv.otros}
        </Typography>
        
        <Typography className={classes.p} variant="body2" component="p">
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
      </CardContent>
    </Card>
    </Accordion>


    </List>
</Fragment>
    )
}
