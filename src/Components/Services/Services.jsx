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
            <h3>Web Development</h3>
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
