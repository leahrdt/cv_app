import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({

  acordion: {
    backgroundColor: 'black',
    padding: '0px',
    alignContent: 'center',
  },

  root: {
    backgroundColor: 'black',
    marginRight: '4%',
    marginLeft: '4%',
    opacity: 0.8,
    padding: '0px',
  },

  Titulo3: {
    borderColor: 'green',
    color: 'white',
    height:'40%'},
    

  titulo4: {
    
    color: 'white',
    fontSize: 14,},


    rootCard: {
      backgroundColor: 'black',
        borderColor: "white",
        backgroundColor: theme.palette.background.paper,
        marginTop: -20,
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
        
        marginLeft: 0,
      },
    inline: {
      
      display: 'inline',
      color: 'white',
      
    },
    inlineOne: {
      
      color: 'gray',
    },
    heading: {
        padding:0,
        textSize: 11,
        textAlign: 'center',
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        
      },

      p: {
        color: 'white',
        
      },
  }));


export const AcordM = (props) => {
    const classes = useStyles();

    return (
    <Fragment>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
        </AccordionSummary>

      </Accordion>
</Fragment>
    )
}