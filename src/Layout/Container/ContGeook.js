import React, { Component } from 'react'
import {Transition} from 'react-transition-group'
import {CvGeo} from '../CVs/CvGeo'
import {Wallpaper} from '../Wallpaper'
import Card from '@material-ui/core/Card';
import { Fragment } from 'react'
import './ContGeo.css';
import {CSSTransition} from 'react-transition-group'


export class ContGeo extends Component {

    constructor(props) { 
        super(props); 
            
        this.state = { 
            aparecer: true,
    }};


    render() {

        const {aparecer} = this.state;
        return (
            <Fragment>

            <Wallpaper />
        
            <CSSTransition
            in={aparecer}
            appear={true}
            timeout={2200}
            classNames="fade"
            
            >
            <Card classNames="cv">
        
            <CvGeo/> 
        
            </Card>
        
            </CSSTransition>
            </Fragment>
        )
    }
}
