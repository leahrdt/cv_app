import React, { Fragment } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import {MisDatos} from '../../../Componentes/MisDatos';
import {Cartita} from '../../../Componentes/Cartita';
import {Titulos} from '../../../Componentes/Titulos';
import {TitulosM} from '../../../Componentes/TitulosM';
import {Space} from '../../../Componentes/Space';
import {getMiCarrera} from '../../../api/MiCarrera'
import {getMiExperiencia} from '../../../api/MiExperiencia'
import {CSSTransition} from 'react-transition-group'
import {MisDatosM} from '../../../Componentes/MisDatosM';
import {HeaderM} from '../../HeaderM.js'
import {CartitaGeoM} from '../../../Componentes/CartitaGeoM';
import {Header} from '../../Header'
import './CvGeo.css';

export class CvGeo extends React.PureComponent {
    
    constructor(props) { 
    super(props); 
        
    this.state = { 
        aparecer: true,
        midata: [],
        miexp: [],
        miexpdev: [],
        picGeo: ["https://i.ibb.co/NYkmPBf/avatar-2.png"],
        dni: [35097033],
        nac: ["Argentino"],
        lic: ["Si - A1,4 -B2"],
        lnac: ["Trenque lauquen"],
        fnac: ["20 de septiembre de 1990"],
        res: ["CABA"],
        MiExp: ["EXPERIENCIA LABORAL"],
        MiEst: ["FORMACION ACADEMICA"],
        MiDat: ["INFORMACION PERSONAL"],
}};

componentDidMount() {
    const midata = getMiCarrera();
    this.setState({
        midata: midata
    })
    const miexp = getMiExperiencia();
    this.setState({
        miexp: miexp
    })
}

    render() { 

    const {midata, aparecer, picGeo, miexp, MiDat, nac, lic, res, lnac, fnac, MiExp, MiEst} = this.state

    return (
        <Fragment>

        <Hidden smUp>
        <HeaderM />


        <MisDatosM 
        titulo={MiDat}
        pic = {picGeo}
            
        />
        
        <TitulosM
        titulo={MiExp}/>
        { miexp.map(miexp => ( //Funcion .map me trnsforma la lista, en la vista que le estoy pasando.
        <CartitaGeoM
          //Props..... el 1er nombre lo creo.
            cv={miexp}
            key={miexp.id} //siempre react te pide una key=id para su manejo interno.
        />
        )) }
        
            
        <TitulosM
        titulo={MiEst}/>
        { midata.map(midata => ( //Funcion .map me trnsforma la lista, en la vista que le estoy pasando.
        <CartitaGeoM
          //Props..... el 1er nombre lo creo.
            cv={midata}
            key={midata.id} //siempre react te pide una key=id para su manejo interno.
        />
        )) }
        
        </Hidden>


            <Hidden xsDown>
            <Header />

            <CSSTransition
            in={aparecer}
            appear={true}
            timeout={2200}
            classNames="fade"
            >

            <Grid container spacing={1} >
            <Grid item xs={4}  >
            <MisDatos 
            pic = {picGeo}
            nac= {nac}
            lic={lic}
            res={res}
            lnac= {lnac}
            fnac= {fnac}
            />
            </Grid>

            <Grid item xs={8}>

            <Space/>
            <Titulos
            titulo={MiEst}/>
            { midata.map(midata => ( //Funcion .map me trnsforma la lista, en la vista que le estoy pasando.
            <Cartita
              //Props..... el 1er nombre lo creo.
                cv={midata}
                key={midata.id} //siempre react te pide una key=id para su manejo interno.
            />
            ))}

            <Titulos
            titulo={MiExp}/>
            { miexp.map(miexp => ( //Funcion .map me trnsforma la lista, en la vista que le estoy pasando.
            <Cartita
              //Props..... el 1er nombre lo creo.
                cv={miexp}
                key={miexp.id} //siempre react te pide una key=id para su manejo interno.
            />
            ))}

            </Grid>

            </Grid>
            </CSSTransition>
            </Hidden>
    </Fragment>
)}}