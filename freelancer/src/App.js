import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from'./components/featured';
import Servicios from './components/nuestros_servicios';

function App() {
  /*en el componente header se importa todo el material-ui y en 
      la carpeta del proyecto hacemos "npm install @material-ui/core"
      */
  return (
    <div className="App" style={{height:"1500px",background: '#475f77ff'}}>
      
      <Header/>
      <Featured/>
      <Servicios/>
    </div>
  );
}

export default App;
