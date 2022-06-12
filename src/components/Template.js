import React from "react";
import "./Template.css";
import blank from "../images/blank.jpg";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Template(){
    const history= useHistory();
    function createForm(){
        var form_id= uuid();
        console.log(form_id)
        var questions_list=[{questionText: "Question", questionType:"radio", options : [{optionText: "Option 1"}], open: true, required:false}]
    
        axios.post(`http://localhost:9000/add_questions/${form_id}`,{
            "document_name": "untitled_form",
            "doc_desc": "Add Description",
            "questions": questions_list,
          })
        history.push("/form/"+form_id)
    }

    return(
        <div className="template_section">
            <div className="template_top">
                <div className="template_left">
                    <span style={{fontSize:"20px", color:"grey"}}>New Form</span>
                </div>
            </div>

            <div className="template_body">
                <div className="card" onClick={createForm}>
                    <img src={blank} alt="blank form" className="card_image"/>
                    <p className="card_title">Blank form</p>
                </div>
            </div>
        </div>
    );
}

export default Template;
