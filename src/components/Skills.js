export default function Skills() {
  const skills = ["React", "JavaScript", "Python", "MySQL", "HTML", "CSS", "Git"];

  return (
    <section id="skills">
      <h2 className="title">Skills</h2>
      <div className="grid">
        {skills.map(skill => (
          <div className="card" key={skill}>{skill}</div>
        ))}
      </div>
    </section>
  );
}