import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    backgroundColor: '#313131',
    },

space: {
    marginLeft: '6%',
    marginRight: '6%',
    marginTop: '30%',
    Width: '100%',
    opacity: 0.8,
    },

titulo1: {
    color: 'white',
    marginTop: '5%',
    fontSize: 28,
    marginBottom: 10,
    fontFamily: 'JetBrains Mono',
    },
titulo2: {
    color: 'gray',
    fontSize: 20,
    marginTop: 8,
    fontFamily: 'JetBrains Mono',
    },
p: {
    marginBottom: 8,
    color: 'white',
    fontFamily: 'JetBrains Mono',
fontSize: 20,
},
});


export const MisDatosDev = (props) => {
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
        <Typography   className={classes.space} >
        </Typography>
        <Typography  className={classes.titulo1} >
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



        </CardContent>
    </Card>


        </div>
    )
}
