import React from "react";
import StorageIcon from "@material-ui/icons/Storage";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import IconButton from "@material-ui/core/IconButton";
import "./Mainbody.css"
import MoreVertIcon from "@material-ui/icons/MoreVert";
import doc_img from "../images/blank.jpg";

function Mainbody(){
    return(
        <div className="mainbody">
            <div className="mainbody_top">
                <div className="mainbody_top_left" style={{fontSize:"16px", fontWeight:500}}>
                    Recent Forms
                </div>
                <div className="mainbody_top_right">
                    <div className="main_top_center" style={{fontSize:"14px", marginRight:"125px"}}>Owned by Anyone <ArrowDropDownIcon/> </div>
                    <IconButton>
                        <StorageIcon style={{ fontSize:"16px", color: "black"}}/>
                    </IconButton>
                    <IconButton>
                        <FolderOpenIcon style={{ fontSize:"16px", color: "black"}}/>
                    </IconButton>
                </div>
            </div>
            <div className="mainbody_docs">
                <div className="doc_card">
                    <img src={doc_img} alt="prev forms" className="doc_image" />
                    <div className="doc_card_content">
                        <h5>Form XYZ</h5>
                        <div className="doc_content" >
                            <div className="content_left">
                              <StorageIcon style={{color: "white", fontSize:"12px", backgroundColor: "rgb(104, 103, 103)", 
                              padding: "3px", marginRight: "3px", borderRadius: "2px"}}/>
                            </div>
                            <MoreVertIcon style={{fontSize:"16px", color:"grey"}}/>
                        </div>
                    </div> 
                </div>
            </div>
            </div>
        );
    }
    
export default Mainbody;
