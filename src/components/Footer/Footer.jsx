import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="contact">
          <p className="email">
            <span className="pi pi-envelope"></span>
            krithin_pakshootra@dovercourt.edu.sg
          </p>
        </div>
        <div className="source-code">
          <a
            href="https://github.com/SuspenseFallback/krithin-pakshootra-changemakers-application"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            View the source code for this website
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
