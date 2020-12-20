import React, { Fragment } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import {MisDatosDev} from '../../../Componentes/MisDatosDev';
import {TitulosDev} from '../../../Componentes/TitulosDev';
import {CartitaDev} from '../../../Componentes/CartitaDev';
import {CartitaDevM} from '../../../Componentes/CartitaDevM';
import {MisDatosM} from '../../../Componentes/MisDatosM';
import {getMiCarreraDev} from '../../../api/MiCarreraDev'
import {getMisProyectos} from '../../../api/MisProyectos'
import {Header} from '../../Header'
import {HeaderM} from '../../HeaderM.js'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import {Space} from '../../../Componentes/Space';
import { AcordM } from '../../../Componentes/AcordM';
import { withStyles } from '@material-ui/core/styles';


export class CvDev extends React.PureComponent {
    
    constructor(props) { 
    super(props); 
        
    this.state = { 
        midata: [],
        miexp: [],
        miexpdev: [],
        miproyec: [],
        dni: [35097033],
        nac: ["Argentino"],
        lic: ["Si - A1,4 -B2"],
        lnac: ["Trenque lauquen"],
        fnac: ["20 de septiembre de 1990"],
        res: ["CABA"],
        MiExp: ["EXPERIENCIA LABORAL"],
        MiEst: ["FORMACION"],
        MiProyect: ["PROYECTOS"],
        MiDat: ["INFORMACION PERSONAL"],
        picGeo: ["https://guillaumebreux.com/avatar.png"],
        clas: ["{classes.root}"],
}};

componentDidMount() {
    const miexpdev = getMiCarreraDev();
    this.setState({
        miexpdev: miexpdev
    })
    const miproyec = getMisProyectos();
    this.setState({
        miproyec: miproyec
    })
}



    render() { 

        const {midata, miproyec, className, picGeo, MiProyect, clas, miexpdev, MiDat, nac, lic, res, lnac, fnac, MiEst} = this.state

    return (
    <Fragment >


        <Hidden smUp>
            <HeaderM 
            />
            <MisDatosM 
            titulo={MiDat}
            pic = {picGeo}
            />
            <TitulosDev
            titulo={MiProyect}/>
            { miproyec.map(miproyec => ( //Funcion .map me trnsforma la lista, en la vista que le estoy pasando.
            <CartitaDevM
              //Props..... el 1er nombre lo creo.
                cv={miproyec}
                key={miproyec.id} //siempre react te pide una key=id para su manejo interno.
            />
            )) }

            
            <TitulosDev
            titulo={MiEst}/>
            { miexpdev.map(miexpdev => ( //Funcion .map me trnsforma la lista, en la vista que le estoy pasando.
            <CartitaDevM
              //Props..... el 1er nombre lo creo.
                cv={miexpdev}
                key={miexpdev.id} //siempre react te pide una key=id para su manejo interno.
            />
            )) }
            </Hidden>


            <Hidden xsDown>


        <Header />   
        <Grid container spacing={0} >
        
        <Grid item xs={4}  >

            <MisDatosDev 
            nac= {nac}
            lic={lic}
            res={res}
            lnac= {lnac}
            fnac= {fnac}
            pic = {picGeo}/>
            </Grid>

            <Grid item xs={8} >
            <Space style= {{backgroundColor: 'red' }}/>
            <TitulosDev
            style= {{backgroundColor: 'red' }}
            titulo={MiProyect}/>
            { miproyec.map(miproyec => ( //Funcion .map me trnsforma la lista, en la vista que le estoy pasando.
            <CartitaDev
              //Props..... el 1er nombre lo creo.
                cv={miproyec}
                key={miproyec.id} //siempre react te pide una key=id para su manejo interno.
            />
            )) }
            <TitulosDev
            titulo={MiEst}/>
            { miexpdev.map(miexpdev => ( //Funcion .map me trnsforma la lista, en la vista que le estoy pasando.
            <CartitaDev
              //Props..... el 1er nombre lo creo.
                cv={miexpdev}
                key={miexpdev.id} //siempre react te pide una key=id para su manejo interno.
            />
            )) }

            
            </Grid>
            </Grid>
            </Hidden>
    </Fragment>

    )
    }
}