import React from 'react';
import {Cartita} from '../Componentes/Cartita';
import {Titulos} from '../Componentes/Titulos';
import {getMiCarrera} from '../api/MiCarrera'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';


export class EstM extends React.PureComponent {
    
    constructor(props) { 
    super(props);
    this.state = { 
        midata: [],
        MiEst: ["FORMACION ACADEMICA"],
}};

componentDidMount() {
    const midata = getMiCarrera();
    this.setState({
        midata: midata
    })
}



    render() { 

    const {midata, MiEst} = this.state

    return (
        <div>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
            <Titulos
            titulo={MiEst}/>
        </AccordionSummary>

      { midata.map(midata => ( //Funcion .map me trnsforma la lista, en la vista que le estoy pasando.
            <Cartita
              //Props..... el 1er nombre lo creo.
                cv={midata}
                key={midata.id} //siempre react te pide una key=id para su manejo interno.
            />
            ))}


    </Accordion>

    </div>

    )
    }
}
