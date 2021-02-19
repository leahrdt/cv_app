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
        MiEst: ["FORMACIÓN ACADEMICA"],
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

      { midata.map(midata => (
            <Cartita
                cv={midata}
                key={midata.id} 
            />
            ))}


    </Accordion>

    </div>

    )
    }
}
