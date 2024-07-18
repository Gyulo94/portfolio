import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ABOUT_PATH, HOME_PATH, PROJECTS_PATH } from "../../constant";
import "./style.css";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onLogoClickHander = () => {
    navigate(HOME_PATH());
  };

  const onProjectClickHander = () => {
    navigate(PROJECTS_PATH());
  };

  const onAboutClickHander = () => {
    navigate(ABOUT_PATH());
  };
  return (
    <header id="header">
      <div className="header-container">
        <div className="header-left-box" onClick={onLogoClickHander}>
          <div className="icon-logo-box">
            <div className="icon logo-icon"></div>
          </div>
          <div className="header-logo">{"찰규의 작업공간"}</div>
        </div>
        <div className="header-right-box">
          <div
            className={
              pathname === "/about"
                ? "header-nav about-active"
                : "header-nav about"
            }
            onClick={onAboutClickHander}
          >
            ABOUT
          </div>
          <div
            className={
              pathname === "/projects"
                ? "header-nav project-active"
                : "header-nav project"
            }
            onClick={onProjectClickHander}
          >
            PROJECT
          </div>
        </div>
      </div>
    </header>
  );
}
