import React from 'react';
import {Element} from 'react-scroll';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from'./components/featured';
import Servicios from './components/nuestros_servicios';
import Nosotros from './components/nosotros';
import Footer from './components/header_footer/Footer';
import AcercaDeNosotros from './components/acerca_de';

function App() {
  /*en el componente header se importa todo el material-ui y en 
      la carpeta del proyecto hacemos "npm install @material-ui/core"
      */
  return (
    <div/** className="App" style={{height:"1500px",background: '#475f77ff'}}*/>
      
      <Header/>
      <Featured/>
      <Element name="Servicios">
        <Servicios/>
      </Element>
      
      <Element name="AcercaDe">
        <AcercaDeNosotros/>
      </Element>
      
      <Element name="Nosotros">
        <Nosotros/>
      </Element>
      
      <Footer/>
    </div>
  );
}

export default App;
