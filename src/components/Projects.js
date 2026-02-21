export default function Projects() {
  const projects = [
    {
      name: "Virtual Assistant",
      desc: "Interactive browser assistant that responds to user commands and performs tasks dynamically using event-driven JavaScript.",
      tech: "HTML • CSS • JavaScript",
      link: "https://github.com/Priyankagit699/Virtual-Assistant-Web-App"
    },
    {
      name: "Online Examination System",
      desc: "Web-based exam system with authentication, role-based access, and structured database schema for storing users, exams, and results.",
      tech: "HTML • CSS • JS • MySQL",
      link: "https://github.com/Priyankagit699/online-examination-system"
    },
    {
      name: "Weather App",
      desc: "Responsive React application that fetches real-time weather data using API and updates UI instantly using state management.",
      tech: "React • API • CSS",
      link: "https://github.com/Priyankagit699/Weather-app"
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
            <a href={p.link} target="_blank" rel="noreferrer" className="githubBtn">
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}