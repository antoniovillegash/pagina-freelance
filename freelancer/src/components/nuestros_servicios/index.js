import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icono_grafica from '../../resources/images/icons/path4756.png';
import icono_engranes from '../../resources/images/icons/path4767.png';
import icono_telefono from '../../resources/images/icons/path4778.png';
import icono_capas from '../../resources/images/icons/path4789.png';
import icono_cohete from '../../resources/images/icons/path4800.png';
import icono_codigo from '../../resources/images/icons/path4811.png';
import icono_escritorio from '../../resources/images/icons/path4822.png';
import icono_web from '../../resources/images/icons/path4833.png';


const Servicios = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">



                <Zoom duration={1000}>
                <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="icono">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                        background:`url(${icono_cohete})`
                                        }}
                                    ></div>
                                </div>
                                
                                <div className="vn_title">
                                Desarrollo
                                </div>
                                <div className="vn_desc">
                                Nuestro equipo de ingenieros desarrollan, prueban y lanzan tu aplicación.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="icono">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                        background:`url(${icono_web})`
                                        }}
                                    ></div>
                                </div>
                                
                                <div className="vn_title">
                                Web
                                </div>
                                <div className="vn_desc">
                                    Contamos con una larga experiencia en el diseño y desarrollo de aplicaciones web.
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="icono">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                        background:`url(${icono_grafica})`
                                        }}
                                    ></div>
                                </div>
                                
                                <div className="vn_title">
                                Marketing
                                </div>
                                <div className="vn_desc">
                                    Nuestros analístas determinan las oportunidades de crecimiento de tu idea.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="icono">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                        background:`url(${icono_capas})`
                                        }}
                                    ></div>
                                </div>
                                
                                <div className="vn_title">
                                Diseño
                                </div>
                                <div className="vn_desc">
                                    Nuestro equipo de diseño desarrolla propuestas para tu idea.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="icono">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div 
                                        className="vn_icon"
                                        style={{
                                        background:`url(${icono_engranes})`
                                        }}
                                    ></div>
                                </div>
                                
                                <div className="vn_title">
                                Mantenimiento
                                </div>
                                <div className="vn_desc">
                                Te ayudamos a mantener, actualizar y ampliar tu aplicación conforme al crecimiento de tu negocio.
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    </Zoom>

                </div>
            </div>
            
        </div>
    );
};

export default Servicios;