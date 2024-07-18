import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavButton from "../../components/Button";
import { ABOUT_PATH, HOME_PATH, PROJECTS_PATH } from "../../constant";
import "./style.css";

export default function Header() {
  const [selectedNavButton, setSelectedNavButton] = React.useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onLogoClickHander = () => {
    navigate(HOME_PATH());
  };

  const onNavButtonClickHander = (selectedButton) => {
    setSelectedNavButton(selectedButton);
    selectedNavButton === "project" && navigate(PROJECTS_PATH());
    selectedNavButton === "about" && navigate(ABOUT_PATH());
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
          <NavButton
            isSelected={selectedNavButton === "about"}
            onSelect={() => onNavButtonClickHander("about")}
          >
            나에 대해
          </NavButton>
          <NavButton
            isSelected={selectedNavButton === "project"}
            onSelect={() => onNavButtonClickHander("project")}
          >
            프로젝트
          </NavButton>
        </div>
      </div>
    </header>
  );
}
