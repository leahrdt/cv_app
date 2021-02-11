import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles({

    media: {
        position: 'absolute',
        width: '50%',
        marginLeft: '25%',
        marginTop: '12%',
        marginBottom: '12%',
        borderRadius: 200,
        zIndex: 2,
    },
    
root: {
    marginLeft: '6%',
    marginRight: '6%',
    marginTop: '43%',
    Width: '100%',
    opacity: 0.8,
    },

space: {
    marginLeft: '6%',
    marginRight: '6%',
    marginTop: '30%',
    Width: '100%',
    opacity: 0.8,
    },
    titulo1: {
    
    marginTop: '3%',
    fontSize: 28,
    marginBottom: 10,
    fontFamily: 'JetBrains Mono',
    },
titulo2: {
    fontSize: 18,
    marginTop: 8,
    
marginBottom: 8,
    fontFamily: 'JetBrains Mono',
    },
p: {fontFamily: 'JetBrains Mono',
fontSize: 20,
color: 'black',
marginBottom: 8,
},
});


export const MisDatos = (props) => {
    const classes = useStyles();

    return (

    <div>


<CardActionArea>
    <CardMedia

    className={classes.media}
    component="img"
    image= {props.pic}
    /> 
</CardActionArea>


<Card className={classes.root}>
        <CardContent >
        <Typography  color="primary" className={classes.space} >
        </Typography>
        <Typography  color="primary" className={classes.titulo1} >
            Datos Personales
        </Typography>

        <Typography className={classes.titulo2} >
        Nacionalidad 
        </Typography>
        <Typography className={classes.p} >
        {props.nac}
        </Typography>

        <Typography className={classes.titulo2} >
        Lugar de Residencia 
        </Typography>
        <Typography className={classes.p} >
        {props.res}
        </Typography>

        <Typography className={classes.titulo2} >
        Lugar de Nacimiento 
        </Typography>
        <Typography className={classes.p} >
        {props.lnac}
        </Typography>

        <Typography className={classes.titulo2} >
        Disponibilidad para cambiar de residencia
        </Typography>
        <Typography className={classes.p} >
        Si
        </Typography>

        <Typography className={classes.titulo2} >
        Licencia de Conducir 
        </Typography>
        <Typography className={classes.p} >
        {props.lic}
        </Typography>

        <Typography className={classes.titulo1} >
        Idiomas
        </Typography>

        <Typography className={classes.p} >
        Ingles
        </Typography>

        <Typography className={classes.titulo1} >
        Softwares
        </Typography>
        <Typography className={classes.p} >
        Petrel
        </Typography>
        <Typography className={classes.p} >
        Geolog
        </Typography>
        <Typography className={classes.p} >
        Techlog
        </Typography>
        <Typography className={classes.p} >
        Starteer - ROGGI
        </Typography>
        <Typography className={classes.p} >
        ArcGIS
        </Typography>

        </CardContent>
        <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
        </IconButton>
    </Card>

            {/* <h1 className="datosPersonales">DATOS PERSONALES</h1>
            Nacionalidad {props.nac}
            Licencia de Conducir {props.lic}
            Lugar de Residencia {props.res}
            Lugar de Nacimiento {props.lnac}
            Fecha de Nacimiento {props.fnac} */}
        </div>
    )
}
