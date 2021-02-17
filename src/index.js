import React from 'react'; //se importa la libreria react.
import ReactDOM from 'react-dom'; // se import la libreria react dom
import Container from './Layout/Container/Container';
import './index.css';


ReactDOM.render( //el render
  <Container />, //nuestro contenedor
  document.getElementById('root') //get elemeent a un "root" q aun nose donde esta.
);
