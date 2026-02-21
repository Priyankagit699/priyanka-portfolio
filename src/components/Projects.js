export default function Projects() {
  const projects = [
    {
      name: "Online Examination System",
      desc: "A full web-based examination platform with login authentication, role-based access, and structured database storage for users, exams, and results.",
      tech: "HTML • CSS • JavaScript • MySQL",
      link: "https://github.com/Priyankagit699/online-examination-system"
    },
    {
      name: "Weather App",
      desc: "Responsive React application that fetches real-time weather data using API integration and updates UI dynamically using state management.",
      tech: "React • API • CSS",
      link: "https://github.com/Priyankagit699/Weather-app"
    },
    {
      name: "Portfolio Website",
      desc: "Personal developer portfolio built using React showcasing projects, skills, and contact details with responsive UI and modern design.",
      tech: "React • CSS • Responsive UI",
      link: "https://github.com/Priyankagit699/portfolio"
    }
  ];

  return (
    <section id="projects">
      <h2 className="title">Projects</h2>

      <div className="grid">
        {projects.map(p => (
          <div className="card project" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <span className="tech">{p.tech}</span>
            <br />

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="githubBtn"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
