import React from "react";
import { useNavigate } from "react-router-dom";
import NavButton from "../../components/Button";
import { ABOUT_PATH, HOME_PATH, PROJECTS_PATH } from "../../constant";
import "./style.css";

export default function Sidebar() {
  const [selectedNavButton, setSelectedNavButton] = React.useState("");
  const navigate = useNavigate();

  const onLogoClickHander = () => {
    navigate(HOME_PATH());
  };

  const onNavButtonClickHander = (selectedButton) => {
    setSelectedNavButton(selectedButton);
    selectedNavButton === "project" && navigate(PROJECTS_PATH());
    selectedNavButton === "about" && navigate(ABOUT_PATH());
  };

  return (
    <div id="sidebar">
      <div className="sidebar-container">
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
  );
}
