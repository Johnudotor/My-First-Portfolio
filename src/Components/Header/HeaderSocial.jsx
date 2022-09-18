import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { MdFacebook } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { RiTwitterFill } from "react-icons/ri";
import { ImYoutube2 } from "react-icons/im";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <MdFacebook />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <SiInstagram />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <RiTwitterFill />
      </a>
      <a href="https://youtube.com/" target="_blank" rel="noreferrer">
        <ImYoutube2 />
      </a>
    </div>
  );
};

export default HeaderSocial;
