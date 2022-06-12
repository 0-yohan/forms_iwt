import React, {useState, useEffect} from "react";
import StorageIcon from "@material-ui/icons/Storage";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import IconButton from "@material-ui/core/IconButton";
import "./Mainbody.css"
import MoreVertIcon from "@material-ui/icons/MoreVert";
import doc_img from "../images/blank.jpg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Card from "./Card" 



function Mainbody(){
    // const history= useHistory();
    const [files,setFiles]=useState([]);


    useEffect(() => {
        async function filenames(){
            
            var request = await axios.get("http://localhost:9000/get_all_files")
            let files = request.data;
            // filesn.forEach((file)=>{
            //     var id_=file.split(".")
            //     async function data(){
            //         var req = await axios.get(`http://localhost:9000/data/${id_[0]}`);
            //          console.log(req.data.document_name)                    
            //     }
            //     data()
            // })
            setFiles(files)
           
        }
        filenames()
        
    },[])
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
                 {
                    files.map((ele)=>(
                        <Card name={ele}/>
                    ))            
                 }
                 <Card />   
            </div>
            </div>
        );
    }
    
export default Mainbody;
