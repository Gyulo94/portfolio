"use client";

import ProjectItem from "@/components/projects";
import { ProjectProps } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../(loading)/page";
import "./style.css";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div id="project-wrapper">
      <h1 className="project-count">
        찰규의 프로젝트의 수는?
        <span style={{ color: "#7925d3" }}> {projects.length}</span>
      </h1>
      <div className="project-container">
        {projects.map((project: ProjectProps) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
