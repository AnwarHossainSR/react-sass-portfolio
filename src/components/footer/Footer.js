import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="social">
      <div className="container">
        <div className="logo">
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <div className="footer-link">
          <a href="https://www.google.com/">
            <i className="fa fa-facebook ml-3 mt-4" />
          </a>
          <a href="https://www.google.com/">
            <i className="fa fa-youtube ml-3 mt-4" />
          </a>
          <a href="https://www.google.com/">
            <i className="fa fa-twitter ml-3 mt-4" />
          </a>
          <a href="https://www.google.com/">
            <i className="fa fa-pinterest ml-3 mt-4 mr-5" />
          </a>
          <a href="https://www.google.com/">
            <i className="fa fa-instagram ml-3 mt-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
