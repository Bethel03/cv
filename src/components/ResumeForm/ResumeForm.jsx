import React from "react";

function Field({label, value, onChange, name, type="text", placeholder=""}){
  return (
    <div>
      <label>{label}</label>
      {type === "textarea" ? (
        <textarea name={name} value={value} onChange={onChange} placeholder={placeholder} />
      ) : (
        <input name={name} value={value} onChange={onChange} placeholder={placeholder} />
      )}
    </div>
  );
}

export default function ResumeForm({data, setData}){
  const handleBasics = (e) => {
    const {name, value} = e.target;
    setData(prev => ({...prev, info: {...prev.info, [name]: value}}));
  };

  const updateListItem = (listName, id, field, value) => {
    setData(prev => ({
      ...prev,
      [listName]: prev[listName].map(item => item.id === id ? {...item, [field]: value} : item)
    }));
  };

  const addListItem = (listName, template) => {
    setData(prev => ({...prev, [listName]: [...prev[listName], {...template, id: Date.now()}]}));
  };

  const removeListItem = (listName, id) => {
    setData(prev => ({...prev, [listName]: prev[listName].filter(i=>i.id !== id)}));
  };

  return (
    <div>
      <h4 style={{color:"#fff"}}>Informations personnelles</h4>
      <Field label="Nom complet" name="fullName" value={data.info.fullName} onChange={handleBasics} />
      <Field label="Titre" name="title" value={data.info.title} onChange={handleBasics} />
      <Field label="Email" name="email" value={data.info.email} onChange={handleBasics} />
      <Field label="Téléphone" name="phone" value={data.info.phone} onChange={handleBasics} />
      <Field label="Localisation" name="location" value={data.info.location} onChange={handleBasics} />
      <Field label="Résumé" name="summary" type="textarea" value={data.info.summary} onChange={handleBasics} />

      <h4 style={{color:"#fff"}}>Expérience</h4>
      {data.experience.map(item => (
        <div key={item.id} style={{border:"1px solid rgba(255,255,255,0.03)",padding:8,borderRadius:6,marginBottom:8}}>
          <Field label="Entreprise" name="company" value={item.company} onChange={(e)=>updateListItem("experience", item.id, "company", e.target.value)} />
          <Field label="Poste" name="position" value={item.position} onChange={(e)=>updateListItem("experience", item.id, "position", e.target.value)} />
          <Field label="Début" name="start" value={item.start} onChange={(e)=>updateListItem("experience", item.id, "start", e.target.value)} />
          <Field label="Fin" name="end" value={item.end} onChange={(e)=>updateListItem("experience", item.id, "end", e.target.value)} />
          <Field label="Détails" name="summary" type="textarea" value={item.summary} onChange={(e)=>updateListItem("experience", item.id, "summary", e.target.value)} />
          <div style={{display:"flex",gap:8}}>
            <button className="small" onClick={()=>removeListItem("experience", item.id)}>Supprimer</button>
          </div>
        </div>
      ))}
      <button onClick={()=>addListItem("experience",{company:"",position:"",start:"",end:"",summary:""})}>Ajouter expérience</button>

      <h4 style={{color:"#fff"}}>Éducation</h4>
      {data.education.map(item => (
        <div key={item.id} style={{border:"1px solid rgba(255,255,255,0.03)",padding:8,borderRadius:6,marginBottom:8}}>
          <Field label="Établissement" name="institution" value={item.institution} onChange={(e)=>updateListItem("education", item.id, "institution", e.target.value)} />
          <Field label="Diplôme" name="degree" value={item.degree} onChange={(e)=>updateListItem("education", item.id, "degree", e.target.value)} />
          <Field label="Début" name="start" value={item.start} onChange={(e)=>updateListItem("education", item.id, "start", e.target.value)} />
          <Field label="Fin" name="end" value={item.end} onChange={(e)=>updateListItem("education", item.id, "end", e.target.value)} />
          <div style={{display:"flex",gap:8}}>
            <button className="small" onClick={()=>removeListItem("education", item.id)}>Supprimer</button>
          </div>
        </div>
      ))}
      <button onClick={()=>addListItem("education",{institution:"",degree:"",start:"",end:""})}>Ajouter éducation</button>


      <h4>Langues</h4>
      {data.languages.map(lang => (
        <div key={lang.id}>
          <Field label="Langue" value={lang.name} onChange={(e)=>updateListItem("languages", lang.id, "name", e.target.value)} />
          <Field label="Niveau" value={lang.level} onChange={(e)=>updateListItem("languages", lang.id, "level", e.target.value)} />
          <button onClick={()=>removeListItem("languages", lang.id)}>Supprimer</button>
        </div>
      ))}
      <br />
      <button onClick={()=>addListItem("languages",{name:"",level:""})}>Ajouter langue</button>


      <h4 style={{color:"#fff"}}>Compétences</h4>
      <div>
        <label>Compétences (séparées par virgule)</label>
        <input value={data.skills.join(", ")} onChange={(e)=>setData(prev=>({...prev, skills: e.target.value.split(",").map(s=>s.trim()).filter(Boolean)}))} />
      </div>
    </div>
  );
}