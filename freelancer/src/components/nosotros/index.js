import React from 'react';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import Antonio from '../../resources/images/antonio.jpg';
import Rodolfo from '../../resources/images/rodolfo.jpg';
import Mauricio from '../../resources/images/mauricio.jpg';
import Contactanos from '../../components/contactanos/Contactanos'

const Nosotros = () => {
    return (
        
        <div className="bck_black encabezado">
                Conocenos
            
    <div className="contenido">
        <Fade>  
            
            <div className="perfil">
                <Zoom delay={500}>
                    <div className="foto_perfil">
                        <img src={Antonio} alt="foto" width='150px'/>
                    </div>
                
                </Zoom>
                <div className="descripcion">
                    <div className="nombre font_questrial">
                        Antonio Villegas
                        <div className="perfil-email">antonio.villegas.0101@gmail.com</div>
                    </div>
                    <div className="bio_texto">
                    Ingeniero desarrollador fullstack de aplicaciones de escritorio y web 
                    apasionado por la inteligencia artificial y la ciencia de datos.
                                           
                    </div>
                </div>
            </div>


            <div className="perfil">
                <Zoom delay={500}>
                    <div className="foto_perfil">
                        <img src={Rodolfo} alt="foto" width='150px'/>
                    </div>
                
                </Zoom>
                <div className="descripcion">
                    <div className="nombre font_questrial">
                        Rodolfo Medrano
                        <div className="perfil-email">sibraim@hotmail.es</div>
                    </div>
                    <div className="bio_texto">
                    Ingeniero desarrollador de videojuegos, aplicaciones de escritorio y web con java, html, php, css y js. 
                                           
                    </div>
                </div>
            </div>


            <div className="perfil">
                <Zoom delay={500}>
                    <div className="foto_perfil">
                        <img src={Mauricio} alt="foto" width='150px'/>
                    </div>
                
                </Zoom>
                <div className="descripcion">
                    <div className="nombre font_questrial">
                        Mauricio Meza
                        <div className="perfil-email">MauricioGarciaMeza@hotmail.com</div>
                    </div>
                    <div className="bio_texto">
                    Ingeniero en software, desarrollador fullstack y apasionado por el diseño gráfico.
                                           
                    </div>
                </div>
            </div>
            
        </Fade> 
    </div>
    <Zoom>
    <Contactanos/>
    </Zoom>
            <br></br>
    </div>
    
    );
};

export default Nosotros;