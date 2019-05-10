import React from 'react';


import Facebook from '../../resources/images/icons/path4487.png';
import Instagram from '../../resources/images/icons/path2.png';
import Mail from '../../resources/images/icons/path44879.png';



const Contactanos = () => {
    
    return (
        <div className="contactanos_wrapper">

            <div className="encabezado ">Contactanos</div>
            <div className="correo">ment.soluciones@gmail.com</div>
           
            <div className="iconos">
                
                <list>
                    
                    <a href="https://www.facebook.com/Ment-409357773178947" target="_blank">
                    
                    <img src={Facebook} alt="foto" height='30px'/>
                    </a>
                    
                    
                    <a href="https://www.instagram.com/ment.soluciones" target="_blank">
                    
                    <img src={Instagram} alt="foto" height='30px'/>
                    </a>
                    
                    <a href="mailto:ment.soluciones@gmail.com" target="_blank">
                    
                    <img src={Mail} alt="foto" height='30px'/>
                    </a>
                </list>
            </div>
        </div>
    );
};

export default Contactanos;