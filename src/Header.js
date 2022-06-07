import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu"; 
import IconButton from "@material-ui/core/IconButton";
import logo from "./images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";

function Header(){
    return(
        <div className="header">

            <div className="header_info">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src={logo} alt="logo" height={"30px"} className="form_image" />
                <div className="info">
                    foRms
                </div>
                
            </div>

            <div className="header_search">
                <SearchIcon />
                <input type="text"name="search" placeholder="search"></input>
            </div>

            <div className="header_right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar src="" />
                </IconButton>
            </div>

        </div>
    );


}

export default Header;