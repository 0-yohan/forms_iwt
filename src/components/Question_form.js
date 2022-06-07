import React, {useState, useEffect} from "react";
import "./Question_form.css"

import CropOriginalIcon from '@material-ui/icons/CropOriginal';
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ShortTextIcon from '@material-ui/icons/ShortText';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import SubjectIcon from '@material-ui/icons/Subject';
import BackupIcon from '@material-ui/icons/Backup';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {BsTrash} from "react-icons/bs"
import Checkbox from '@material-ui/core/Checkbox';
import { IconButton } from '@material-ui/core';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CenteredTabs from "./Tabs" 

import {Grid} from '@material-ui/core';
import {BsFileText} from "react-icons/bs"
import { Paper, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import {FcRightUp} from "react-icons/fc"
import CloseIcon from '@material-ui/icons/Close';
import Radio from '@material-ui/core/Radio';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import AccordionActions from '@material-ui/core/AccordionActions';
import Divider from '@material-ui/core/Divider';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

import SaveIcon from '@material-ui/icons/Save';

function Question_form(){
    return(
        <div className="">
            <br></br>
            <div className="section">
           
                <div className="question_title_section">

                
                <div className="question_form_top">
                    <input type="text" className="question_form_top_name" style={{color:"black"}} placeholder="Untitled document" ></input>
                    <input type="text" className="question_form_top_desc" placeholder="Form Description" ></input>

                </div>
                </div> 
            </div>
        </div>

    );
}

export default Question_form;