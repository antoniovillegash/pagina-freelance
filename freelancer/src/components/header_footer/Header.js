import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';
import logo from '../../resources/images/icons/g4348.png'

class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }


    handleScroll = () => {
       if(window.scrollY > 0){
            this.setState({
                headerShow: true
            })
       } else {
            this.setState({
                headerShow: false
            })
       }
    }


    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow ? '#33485bff' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0px'
                }}
            >
                <Toolbar>
                <Zoom duration={1500}>
                <img src={logo} alt="Logo" height="80px"/>
                    
                        <div className="header_logo">
                    
                        <div className="font_quicksand header_logo_ment">MENT</div>
                        <div className="header_logo_title">soluciones</div>
                        </div>
                    </Zoom>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=> this.toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton> 

                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value)=> this.toggleDrawer(value)}
                    />


                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;