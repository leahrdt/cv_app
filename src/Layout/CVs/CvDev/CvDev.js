import React, { Fragment } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import {MisDatosDev} from '../../../Componentes/MisDatosDev';
import {TitulosDev} from '../../../Componentes/TitulosDev';
import {TitulosDevM} from '../../../Componentes/TitulosDevM';
import {CartitaDev} from '../../../Componentes/CartitaDev';
import {CartitaDevM} from '../../../Componentes/CartitaDevM';
import {MisDatosM} from '../../../Componentes/MisDatosM';
import {getMiCarreraDev} from '../../../api/MiCarreraDev'
import {getMisProyectos} from '../../../api/MisProyectos'
import {Header} from '../../Header'
import {HeaderM} from '../../HeaderM.js'
import {Space} from '../../../Componentes/Space';
import './CvDev.css';

import {CSSTransition} from 'react-transition-group'


export class CvDev extends React.PureComponent {
    
    constructor(props) { 
    super(props); 
        
    this.state = { 
        aparecer: true,
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
        MiEst: ["FORMACIÓN"],
        MiProyect: ["PROYECTOS"],
        MiDat: ["INFORMACIÓN PERSONAL"],
        picGeo: ["https://i.ibb.co/7G8mHmK/avatar-4.png"],
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

        const { miproyec, aparecer, picGeo, MiProyect, clas, miexpdev, MiDat, nac, lic, res, lnac, fnac, MiEst} = this.state

    return (
    <Fragment >


        <Hidden smUp>
            <HeaderM 
            />
            <MisDatosM 
            titulo={MiDat}
            pic = {picGeo}
            />
            <TitulosDevM
            titulo={MiProyect}/>
            { miproyec.map(miproyec => ( 
            <CartitaDevM
                cv={miproyec}
                key={miproyec.id} 
            />
            )) }

            
            <TitulosDevM
            titulo={MiEst}/>
            { miexpdev.map(miexpdev => ( 
            <CartitaDevM
                cv={miexpdev}
                key={miexpdev.id} 
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
            { miproyec.map(miproyec => ( 
            <CartitaDev
                cv={miproyec}
                key={miproyec.id} 
            />
            )) }
            <TitulosDev
            titulo={MiEst}/>
            { miexpdev.map(miexpdev => ( 
            <CartitaDev
                cv={miexpdev}
                key={miexpdev.id} 
            />
            )) }

            
            </Grid>
            </Grid>
            </CSSTransition>
            </Hidden>
    </Fragment>

    )
    }
}