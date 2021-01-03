import React, { PureComponent } from 'react'
import {Transition} from 'react-transition-group'

import {CvGeo} from '../CVs/CvGeo'
import {Wallpaper} from '../Wallpaper'
import Card from '@material-ui/core/Card';
import { Fragment } from 'react'
import './ContGeo.css';


export const ContGeo = () => {
  return (
  <Fragment>

    <Wallpaper />


    <Card className="cv">

    <CvGeo/> 

    </Card>

  </Fragment>

)
}