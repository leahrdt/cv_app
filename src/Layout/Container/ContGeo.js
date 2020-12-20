
import {Header} from '../Header'
import {CvGeo} from '../CVs/CvGeo'
import {Wallpaper} from '../Wallpaper'

import Card from '@material-ui/core/Card';

import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react'

const useStyles = makeStyles({
  cv: {
    
      position: 'absolute',
      top: "0%",
      backgroundColor: 'transparent',
      width: '100%',  
      height:'200%',  
      },
  
  });

export const ContGeo = () => {

  const classes = useStyles();

  return (
  <Fragment>

    <Wallpaper />

    <Card className={classes.cv}>

    <CvGeo/> 

    </Card>

  </Fragment>

)
}