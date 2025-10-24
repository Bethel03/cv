import React from "react";
import ResumeTemplate from "../Template/ResumeTemplate";

export default function Preview({data}){
    return (
        <div id="resume-template" style ={{background:"#fff",padding:20,borderRadius:6,maxWidth:800}} >
            <ResumeTemplate data = {data}/>
        </div>
    );
}