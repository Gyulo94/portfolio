"use client";
import Loading from "@/components/Spinner";
import {
  Express,
  Java,
  Javascript,
  Jsp,
  Mongo,
  Mysql,
  NodeJs,
  Oracle,
  ReactJs,
  Spring,
  Typescript,
} from "@/components/TechStack";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import "./style.css";

export default function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div id="about-wrapper">
          <div className="about-container">
            <div className="about-left">
              <div className="profile-image-wrapper">
                <Image src={"/profile.png"} alt="profile" fill />
              </div>
              <div className="profile-info-wrapper">
                <div className="profile-name-wrapper">
                  <div className="profile-name">박철규</div>
                  <div className="profile-email">chalgyu1029@gmail.com</div>
                  <div className="bar"></div>
                </div>
                <div className="profile-job-wrapper">
                  <div className="profile-job">
                    웹 개발자 <span className="eng">Web Developer</span>
                  </div>
                  <div className="bar"></div>
                </div>
                <div className="profile-location-wrapper">
                  <div>
                    <div className="icon-box">
                      <MdLocationOn size={50} className="icon" />
                    </div>
                    <div className="location">Seoul, Republic of Korea</div>
                  </div>
                  <div className="bar"></div>
                </div>
              </div>
            </div>
            <div className="about-right">
              <div className="profile-contents-wrapper">
                <div className="hello-wrapper">
                  <div className="hello-title">👋🏻 Hello</div>
                  <div className="hello-description">
                    항상 잘 하고 싶지만, 유명해지고 싶지 않은 웹 개발자 박철규
                    입니다.
                  </div>
                </div>
                <div className="profile-language-wrapper">
                  <div className="language-title">📝 언어</div>
                  <div className="language-description">
                    <Java />
                    <Javascript />
                    <Typescript />
                  </div>
                </div>
                <div className="profile-framework-wrapper">
                  <div className="framework-title">
                    📚 라이브러리 및 프레임워크
                  </div>
                  <div className="framework-description">
                    <Jsp />
                    <NodeJs />
                    <Spring />
                    <ReactJs />
                    <Express />
                  </div>
                </div>
                <div className="profile-database-wrapper">
                  <div className="database-title">📁 데이터베이스</div>
                  <div className="database-description">
                    <Oracle />
                    <Mysql />
                    <Mongo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
