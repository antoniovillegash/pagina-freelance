import React from 'react';
import {scroller} from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import espadas from '../../resources/images/icons/path4450.png';
import mail from '../../resources/images/icons/path4473.png';
import persona from '../../resources/images/icons/path4462-3.png';

const SideDrawer = (props) => {

    const scrollToElement=(element)=>{
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true,
            offset: -100
        });
        props.onClose(false);
    }
    return (
        <Drawer
            anchor="right"  
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav" className="side_drawer">
                
                <ListItem button onClick={()=> scrollToElement('Servicios')} >
                    <img src={espadas} alt="Logo" height="30px"/>
                    <div className="boton_drawer">Nuestros Servicios</div>
                    </ListItem>

                <ListItem button onClick={()=> scrollToElement('AcercaDe')} className="boton_drawer">
                    <img src={persona} alt="Logo" width="30px"/>
                    <div className="boton_drawer">Acerca De Nosotros</div>
                </ListItem>

                <ListItem button onClick={()=> scrollToElement('Nosotros')} className="boton_drawer">
                    <img src={mail} alt="Logo" width="32px"/>
                    <div className="boton_drawer">Conocenos</div>
                </ListItem>

            </List> 
        </Drawer>
    );
};

export default SideDrawer;