import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm/ResumeForm";
import Preview from "./components/Preview/Preview";
import { sampleCV } from "./utils/sampleData";
import { exportToPdf } from "./utils/pdfExport";

export default function App(){
  const [data, setData] = useState(sampleCV);
  const handleExport = () => {
    const el = document.getElementById("resume-template");
    if(el) exportToPdf(el, `${data.info.fullName || "resume"}.pdf`);
  };
  return (
    <div className="app">
      <div className="panel">
        <h3 style={{color:"#fff"}}>Éditeur</h3>
        <ResumeForm data={data} setData={setData} />
        <div className="controls">
          <button onClick={handleExport}>Exporter PDF</button>
          <button className="small" onClick={()=>setData(sampleCV)}>Réinitialiser</button>
        </div>
      </div>
      <div className="preview">
        <h3 style={{color:"#fff"}}>Aperçu</h3>
        <Preview data={data} />
      </div>
    </div>
  );
}