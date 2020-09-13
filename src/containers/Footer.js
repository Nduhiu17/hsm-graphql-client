import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const Footer = () =>
    <AppBar position="static"
            style={{
                bottom:0,
                position:'fixed',
                width:'100%',
                display:'flex',
                justifyContent:'center',
                flexDirection:'row'
            }}
            >
        <Toolbar>
            &copy; Smart Care System
        </Toolbar>
    </AppBar>


export default Footer
