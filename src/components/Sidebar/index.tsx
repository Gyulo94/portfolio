import { useRouter } from "next/navigation";
import React from "react";
import NavButton from "../Button";
import "./style.css";

export default function Sidebar() {
  const [selectedNavButton, setSelectedNavButton] = React.useState("");
  const navigate = useRouter();

  const onNavButtonClickHander = (selectedButton: string) => {
    setSelectedNavButton(selectedButton);
    selectedNavButton === "project" && navigate.push("/projects");
    selectedNavButton === "about" && navigate.push("/about");
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
