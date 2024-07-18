import React from "react";
import { FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";
import "./style.css";

export default function Footer() {
  const onGitClickHandler = () => {
    window.location.href = "https://github.com/Gyulo94";
  };

  const onInstaClickHandler = () => {
    window.location.href = "https://www.instagram.com/gyulo94";
  };

  return (
    <header id="footer">
      <div className="footer-container">
        <div className="footer-left-box">
          <div className="footer-logo">{"찰규의 작업 공간"}</div>
          <div className="footer-copyright">ⓒ 2024 chalgyu1029@gmail.com</div>
        </div>
        <div className="footer-right-box">
          <div className="icon-button" onClick={onGitClickHandler}>
            <FaSquareGithub className="icon" />
          </div>
          <div className="icon-button">
            <FaSquareInstagram className="icon" onClick={onInstaClickHandler} />
          </div>
        </div>
      </div>
    </header>
  );
}
