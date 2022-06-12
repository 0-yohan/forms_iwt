import React from "react";
import logo from "../images/logo.png";
import IconButton from "@material-ui/core/IconButton";
import { FiSettings } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai"
import { IoMdFolderOpen } from "react-icons/io"
import Button from "@material-ui/core/Button";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import "./Formheader.css";

function Formheader(){
    return(
        <div className="form_header">
            <div className="form_header_left">
                <a href="http://localhost:3000/"><img src={logo} alt="forms" style={{height:"30px", width:"30px", paddingLeft:"10px"}}/></a>
                <input type="text" placeholder="Untitled form" className="form_name"></input>
                
            </div>
            <div className="form_header_right">
                <IconButton>
                    <AiOutlineEye className="form_header_icon"/>
                </IconButton>
                <IconButton>
                    <FiSettings className="form_header_icon"/>
                </IconButton>

                <Button variant="contained" color="primary" href="#contained-buttons">Send</Button>

                <IconButton>
                    <MoreVertIcon size="small" className="form_header_icon"/>
                </IconButton>
                <IconButton>
                    <Avatar style={{height:"30px", width:"30px"}} src={Avatar}/>
                </IconButton>
            </div>
        </div>

    );

}

export default Formheader;