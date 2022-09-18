import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { GoLogoGithub } from "react-icons/go";
import { ImSkype } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <a href="# " className="footer__logo">
        ANALYST JOHN UDOTOR ITSENEGBEMHE
      </a>

      <ul className="permalinks">
        <li>
          <a href="# ">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/udotorjohn">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/john_udotor">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/john_udotor">
          <IoLogoTwitter />
        </a>
        <a href="https://github.com/johnudotor">
          <GoLogoGithub />
        </a>
        <a href="https://skype.com/john.udotor">
          <ImSkype />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          {" "}
          &copy; King John Udotor Itsenegbemhe Joseph's Portfolio. All rights
          reserved
        </small>
      </div>
    </footer>
  );
};
export default Footer;
