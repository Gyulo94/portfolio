import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import NavButton from "../Button";
import "./style.css";

interface sidebarOpen {
  sidebarOpen: (isOpen: boolean) => void;
}

export default function Sidebar(sidebarOpen: sidebarOpen) {
  const [selectedNavButton, setSelectedNavButton] = React.useState("");
  const navigate = useRouter();

  const onNavButtonClickHander = (selectedButton: string) => {
    setSelectedNavButton(selectedButton);
    selectedNavButton === "project" && navigate.push("/projects");
    selectedNavButton === "about" && navigate.push("/about");
    sidebarOpen.sidebarOpen(false);
  };

  return (
    <div id="sidebar">
      <div className="sidebar-container">
        <Link href="/about">
          <NavButton
            isSelected={selectedNavButton === "about"}
            onSelect={() => onNavButtonClickHander("about")}
          >
            나에 대해
          </NavButton>
        </Link>
        <Link href="/projects">
          <NavButton
            isSelected={selectedNavButton === "project"}
            onSelect={() => onNavButtonClickHander("project")}
          >
            프로젝트
          </NavButton>
        </Link>
      </div>
    </div>
  );
}
