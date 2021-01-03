
import {CvDev} from '../CVs/CvDev'
import {WallpaperDev} from '../Wallpaper/WallpaperDev'
import { Fragment } from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cv: {
    
      position: 'absolute',
      top: "0%",
      backgroundColor: 'transparent',
      width: '100%',  
      height:'auto',  
      },
  
  });

export const ContDev = () => {

  const classes = useStyles();

  return (
    <Fragment>

    <WallpaperDev />


    <Card className={classes.cv}>

    <CvDev/> 

    </Card>
  </Fragment>

)
}