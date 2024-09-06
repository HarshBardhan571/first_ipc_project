import { useState } from 'react';
import { first_ipc_project_backend } from 'declarations/first_ipc_project_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    first_ipc_project_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <GreetingForm handleSubmit={handleSubmit} greeting={greeting} />
      <Contact />
    </main>
  );
}

// Header Component
function Header() {
  return (
    <header>
      <h1>Your Name</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

// Introduction Section
function Introduction() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Hi, I'm [Your Name], a passionate developer with experience in [Your Specialization].
        I love creating web applications, learning new technologies, and contributing to open-source projects.
      </p>
    </section>
  );
}

// Skills Section
function Skills() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'C++', 'Machine Learning']; // Add your skills here

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

// Projects Section
function Projects() {
  const projects = [
    { name: 'Project 1', description: 'A cool project about XYZ.', link: '#' },
    { name: 'Project 2', description: 'Another great project focused on ABC.', link: '#' },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

// Greeting Form (Your existing functionality)
function GreetingForm({ handleSubmit, greeting }) {
  return (
    <section id="greeting-form">
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </section>
  );
}

// Contact Section
function Contact() {
  const [formStatus, setFormStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setFormStatus('Thank you for your message!');
  }

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" required />

        <button type="submit">Submit</button>
      </form>
      {formStatus && <p>{formStatus}</p>}
    </section>
  );
}

export default App;
