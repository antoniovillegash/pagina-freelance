import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"  
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav" className="side_drawer">
                
                <ListItem button onClick={()=> console.log('Featured')} >
                    <div className="boton_drawer">Nuestros Servicios</div>
                </ListItem>

                <ListItem button onClick={()=> console.log('Venue NFO')} className="boton_drawer">
                    <div className="boton_drawer">Acerca De Nosotros</div>
                </ListItem>

                <ListItem button onClick={()=> console.log('Highlights')} className="boton_drawer">
                    <div className="boton_drawer">Contactanos</div>
                </ListItem>

            </List> 
        </Drawer>
    );
};

export default SideDrawer;