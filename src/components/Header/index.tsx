"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import NavButton from "../Button";
import Sidebar from "../Sidebar";
import "./style.css";

export default function Header() {
  const [selectedNavButton, setSelectedNavButton] = React.useState("");
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const navigate = useRouter();

  const onLogoClickHander = () => {
    navigate.push("/");
    setSelectedNavButton("");
  };

  const onNavButtonClickHander = (selectedButton: string) => {
    setSelectedNavButton(selectedButton);
    navigate.push(`/${selectedButton}`);
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
        <div className="icon-button-large" onClick={onSidebarClickHandler}>
          {!isSidebarOpen ? (
            <GiHamburgerMenu className="icon" />
          ) : (
            <IoClose className="icon" />
          )}
        </div>
        {isSidebarOpen && <Sidebar sidebarOpen={setIsSidebarOpen} />}
      </div>
    </header>
  );
}
