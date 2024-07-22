import ProjectItem from "@/components/projects";
import { ProjectProps } from "@/types";
import axios from "axios";
import "./style.css";

const notionSecret = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

async function fetchProjects(): Promise<ProjectProps[]> {
  try {
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${notionDatabaseId}/query`,
      {
        page_size: 100,
      },
      {
        headers: {
          Accept: "application/json",
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
          Authorization: `Bearer ${notionSecret}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export default async function Projects() {
  const projects: ProjectProps[] = await fetchProjects();

  const projectNames = projects.map(
    (project: ProjectProps) =>
      project.properties?.이름?.title[0]?.plain_text || ""
  );

  return (
    <div id="project-wrapper">
      <h1 className="project-count">
        찰규의 프로젝트의 수는?
        <span style={{ color: "#7925d3" }}> {projectNames.length}</span>
      </h1>
      <div className="project-container">
        {projects.map((project: ProjectProps) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
