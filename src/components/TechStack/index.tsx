import { FaNodeJs, FaReact } from "react-icons/fa";
import { GrMysql, GrOracle } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io5";
import { RiJavaLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiSpring, SiTypescript } from "react-icons/si";
import "./style.css";

export const Java = () => {
  return (
    <div id="java-wrapper">
      <RiJavaLine />
      <h1>JAVA</h1>
    </div>
  );
};

export const Javascript = () => {
  return (
    <div id="javascript-wrapper">
      <IoLogoJavascript />
      <h1>JAVASCRIPT</h1>
    </div>
  );
};

export const Typescript = () => {
  return (
    <div id="typescript-wrapper">
      <SiTypescript />
      <h1>TYPESCRIPT</h1>
    </div>
  );
};

export const NodeJs = () => {
  return (
    <div id="node-wrapper">
      <FaNodeJs />
      <h1>NODE.JS</h1>
    </div>
  );
};

export const Jsp = () => {
  return (
    <div id="jsp-wrapper">
      <RiJavaLine />
      <h1>JSP</h1>
    </div>
  );
};

export const Express = () => {
  return (
    <div id="express-wrapper">
      <SiExpress />
      <h1>Express</h1>
    </div>
  );
};

export const Spring = () => {
  return (
    <div id="spring-wrapper">
      <SiSpring />
      <h1>SPRING</h1>
    </div>
  );
};

export const ReactJs = () => {
  return (
    <div id="react-wrapper">
      <FaReact />
      <h1 style={{ color: "rgba(0, 0, 0, 0.8)" }}>REACT</h1>
    </div>
  );
};

export const Oracle = () => {
  return (
    <div id="oracle-wrapper">
      <GrOracle />
      <h1>ORACLE</h1>
    </div>
  );
};

export const Mysql = () => {
  return (
    <div id="mysql-wrapper">
      <GrMysql />
      <h1>MYSQL</h1>
    </div>
  );
};

export const Mongo = () => {
  return (
    <div id="mongo-wrapper">
      <SiMongodb />
      <h1>MONGO DB</h1>
    </div>
  );
};
