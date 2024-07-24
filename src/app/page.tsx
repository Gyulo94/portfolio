"use client";
import HOME_ANIMATION from "@/assets/lotties/developer-animation.json";
import Loading from "@/components/Spinner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Animation from "../components/Animation";
import "./style.css";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useRouter();

  const onProjectsButtonClickHandler = () => {
    navigate.push("/projects");
  };

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main id="home-wrapper">
          <div className="home-container">
            <div className="home-left">
              <div className="home-job">웹 개발자</div>
              <div className="home-name">박철규</div>
              <div className="home-description">
                프론트엔드와 백엔드 구분없이 다양한 경험과 역량을 <br /> 키우고
                싶은 개발자입니다.
              </div>
              <div className="home-button-wrapper">
                <button
                  className="home-button"
                  onClick={onProjectsButtonClickHandler}
                >
                  프로젝트 보기
                </button>
              </div>
            </div>
            <div className="home-right">
              <Animation
                lottieJson={HOME_ANIMATION}
                // style={{ width: 300, height: 300 }}
              />
            </div>
          </div>
        </main>
      )}
    </>
  );
}
