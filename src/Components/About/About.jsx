import React from "react";
import "./About.css";
import ME from "../../Assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me-about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>50+ Clients Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p> 
As a seasoned full-stack web developer with a passion for crafting innovative digital solutions, I specialize in designing, developing, and deploying scalable web applications. With extensive expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack, I deliver high-quality solutions that meet clients' evolving needs <br /> <br />

 Professional Summary <br />

With 3 years of experience in web development, I've developed a strong foundation in both front-end and back-end technologies. My expertise spans: <br />

- Front-end development: React.js, JavaScript, HTML5, CSS3, responsive web design <br />
- Back-end development: Node.js, Express.js, RESTful APIs, MongoDB <br />
- Database management: MongoDB, data modeling, database optimization <br /> <br />

Key Skills <br />

- MERN stack development <br />
- Full-stack web development<br />
- Responsive web design<br />
- API development and integration<br />
- Database design and management<br />
- Version control (Git)<br />
- Agile development methodologies <br /> <br />

Experience <br />

- Full-stack web developer, Deebug Computers (2022)<br />
    - Developed and maintained multiple web applications using MERN stack <br />
    - Collaborated with cross-functional teams to deliver projects on time <br />
    - Implemented responsive design and optimized application performance <br />
- Freelance web developer<br />
    - Designed and developed custom web applications for clients<br />
    - Worked closely with clients to understand requirements and deliver tailored solutions<br /> <br />

Education<br />

- Bachelor's Degree in Computer Science, Ambrose Alli University, Ekpoma. (2021)<br /><br />

Certifications<br />

- Certified Full-stack Web Developer, (2022)<br /> <br />

Personal Philosophy<br />

As a full-stack web developer, I strive to create innovative, user-centric solutions that exceed client expectations. I'm committed to staying up-to-date with industry trends and best practices, ensuring my skills remain relevant and effective.<br /> <br />

Let's Connect<br />

If you're looking for a skilled full-stack web developer to bring your project to life, let's collaborate! Feel free to explore my portfolio, GitHub repositories, or contact me directly to discuss your project requirements
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Chat
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
