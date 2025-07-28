
import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>My Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Website Development</h3>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>As an experienced Full-Stack Web Developer, I specialize in delivering high-performance, scalable, and user-centric web solutions tailored to meet your business and personal needs. With a robust skill set in React.js, Node.js, CSS, JavaScript, and HTML, I bring end-to-end expertise to transform your vision into reality. My services combine technical proficiency, modern design principles, and a commitment to delivering seamless digital experiences.</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Custom Web Development 
   - Build responsive, dynamic, and intuitive front-end applications using React.js and JavaScript, ensuring engaging user interfaces and smooth interactions.  
   - Develop robust and scalable back-end systems with Node.js, enabling efficient server-side logic, APIs, and database integration.  
   - Craft clean, semantic, and accessible HTML structures paired with pixel-perfect CSS styling for visually stunning and responsive designs.
</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>End-to-End Solutions
   - Design and implement full-stack applications, from concept to deployment, ensuring seamless integration between front-end and back-end components.  
   - Leverage RESTful APIs, third-party integrations, and modern frameworks to create secure and efficient web applications.  
   - Optimize performance, scalability, and security to deliver fast, reliable, and maintainable solutions.
</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>UI/UX Design Implementation
   - Translate wireframes and design mockups into fully functional, responsive interfaces with a focus on usability and aesthetics.  
   - Utilize **CSS** frameworks (e.g., Tailwind CSS, Bootstrap) and custom styling to create visually cohesive and mobile-friendly designs.  
   - Ensure cross-browser compatibility and adherence to web accessibility standards (WCAG).</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Maintenance & Optimization
   - Provide ongoing support, bug fixes, and performance optimization for existing web applications.  
   - Implement SEO best practices and optimize load times to improve user engagement and search engine rankings.  
   - Conduct code reviews and refactoring to ensure clean, maintainable, and future-proof codebases.</p>
              </li>
            </ul>
          </div>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Computer Analyst</h3>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit</p>
              </li>
            </ul>
          </div>
        </article>

        {/* END OF COMPUTER ANALYST */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit</p>
              </li>

              <li>
                <BiCheck className="service__list-icon" />
                <p>Lorem, ipsum dolor sit amet consectetur elit</p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Services;
