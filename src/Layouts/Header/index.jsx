import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import NavButton from "../../components/Button";
import { ABOUT_PATH, HOME_PATH, PROJECTS_PATH } from "../../constant";
import Sidebar from "../Sidebar";
import "./style.css";

export default function Header() {
  const [selectedNavButton, setSelectedNavButton] = React.useState("");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const navigate = useNavigate();

  const onLogoClickHander = () => {
    navigate(HOME_PATH());
  };

  const onNavButtonClickHander = (selectedButton) => {
    setSelectedNavButton(selectedButton);
    selectedNavButton === "project" && navigate(PROJECTS_PATH());
    selectedNavButton === "about" && navigate(ABOUT_PATH());
  };

  const onSidebarClickHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header id="header">
      <div className="header-container">
        <div className="header-left-box" onClick={onLogoClickHander}>
          <div className="icon-logo-box">
            <div className="icon logo-icon"></div>
          </div>
          <div className="header-logo">{"찰규의 작업 공간"}</div>
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
        <div className="icon-button-large" onClick={onSidebarClickHandler}>
          {!isSidebarOpen ? (
            <GiHamburgerMenu className="icon" />
          ) : (
            <IoClose className="icon" />
          )}
        </div>
        {isSidebarOpen && <Sidebar />}
      </div>
    </header>
  );
}
