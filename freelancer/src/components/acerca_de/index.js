import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

import Logo from '../../resources/images/icons/g4348.png';

const AcercaDeNosotros = () => {
    return (
        <div className="bck_red">
            <div className="encabezado">
                Acerca de nosotros
            </div>
            <div className="acerca_de_wrapper">
            <Bounce>
            <img src={Logo} alt="foto" width='200px'/>
            </Bounce>
                <Fade>
                <div className="descripcion_acerca_de">
                    Ment nace como un equipo dispuesto a dar soluciones 
                    mediante la aplicación de la ingeniería 
                    a las problemáticas que se presentan en la sociedad moderna.
                    <br></br>
                    <br></br>
                    La palabra Ment proviene de la lengua maya que se traduce como 
                    "crear, fabricar, hacer".
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default AcercaDeNosotros;