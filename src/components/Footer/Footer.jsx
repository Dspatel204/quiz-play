import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <p className="mb-0">
        © 2023, <span>QuizPlay Games.</span> All Right Reserved
        </p>
      </div>
      <div className="footer-right">
        <p className="mb-0">Privacy Policy</p>
        <p className="mb-0">Terms Of Use</p>
      </div>
    </div>
  );
};

export default Footer;
