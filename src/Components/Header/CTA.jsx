import React from "react";
import CV from "../../Assets/My current CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download My CV
      </a>
      <a href="#Contact" className="btn btn-primary">
        Let's Chat
      </a>
    </div>
  );
};

export default CTA;
