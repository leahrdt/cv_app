import React from 'react';
import {Cartita} from '../Components/Cartita';
import {Titulos} from '../Components/Titulos';
import {getMiExperiencia} from '../api/MiExperiencia'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';

export class ExpM extends React.PureComponent {
    
    constructor(props) { 
    super(props); 
    this.state = { 
        miexp: [],
        MiExp: ["EXPERIENCIA LABORAL"],
}};

componentDidMount() {
  const miexp = getMiExperiencia();
  this.setState({
      miexp: miexp
    })}

    render() { 

    const {miexp, MiExp} = this.state

    return (
        <div>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <Titulos
            titulo={MiExp}/>
        </AccordionSummary>

      { miexp.map(miexp => ( //Funcion .map me trnsforma la lista, en la vista que le estoy pasando.
      <Cartita
        //Props..... el 1er nombre lo creo.
          cv={miexp}
          key={miexp.id} //siempre react te pide una key=id para su manejo interno.
      />)) }
      </Accordion>

    </div>)}}
