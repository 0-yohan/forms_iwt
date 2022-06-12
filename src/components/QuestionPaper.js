import React from 'react'
import { Button, Typography } from '@material-ui/core'

import { useParams } from "react-router";
import axios from "axios";

import "./Userform.css"
function SubmitForm() {
    // var {id} = useParams();
    
    // async function data(){
    //    var request = await axios.get(`http://localhost:9000/data/${id}`)
    //    console.log(request.data)

    // }

    // data()

    return (
        <div className="submit">
             <div className="user_form">
            <div className="user_form_section">
                <div className="user_title_section">
                    <Typography style={{fontSize:"26px",fontFamily: "'Google Sans','Roboto','Arial','sans-serif'"}} >Untitled Form</Typography>
                    <br></br>
                    <Typography style={{fontSize:"13px",fontWeight:"400"}} >Your response has been recorded.</Typography>
                    <br></br>
<a href="http://localhost:3000/response" style={{fontSize:"13px"}}>Submit another response</a>
                </div>
            <div className="user_footer" style={{marginTop:"10px", marginBottom:"0px", textAlign:"center", fontSize:"medium", fontWeight:"500"}}>
                foRms
            </div>
        </div>
        </div>
        </div>

    )
}

export default SubmitForm
