export default function ResumeTemplate({data}) {
  const {info, experience, education, skills, languages} = data;
  return (
    <div style={{fontFamily:"Arial, sans-serif", color:"#333"}}>
      <h1 style={{marginBottom:0}}>{info.fullName}</h1>
      <h3 style={{marginTop:0, color:"#007bff"}}>{info.title}</h3>
      <p>{info.email} | {info.phone} | {info.location}</p>
      <hr />

      <h2>Résumé</h2>
      <p>{info.summary}</p>

      <h2>Expérience</h2>
      {experience.map(e => (
        <div key={e.id}>
          <strong>{e.position}</strong> – {e.company} ({e.start} - {e.end})
          <p>{e.summary}</p>
        </div>
      ))}

      <h2>Éducation</h2>
      {education.map(ed => (
        <div key={ed.id}>
          <strong>{ed.degree}</strong> – {ed.institution} ({ed.start} - {ed.end})
        </div>
      ))}

      {languages && languages.length > 0 && (
        <section>
          <h2 style={{ color: "#007bff" }}>Langues</h2>
          <ul>
            {languages.filter(l => l.name && l.level).map((lang, i) => (
              <li key={i}>{lang.name} – {lang.level}</li>
            ))}
          </ul>
        </section>
      )}

      <h2>Compétences</h2>
      <ul>
        {skills.map((s,i)=><li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}