import ProjectItem from "@/components/projects";
import { ProjectProps } from "@/types";
import axios from "axios";
import "./style.css";

const notionSecret = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

export default async function Projects() {
  try {
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${notionDatabaseId}/query`,
      {
        page_size: 100,
      },
      {
        headers: {
          accept: "application/json",
          "Notion-Version": "2022-02-22",
          "Content-Type": "application/json",
          authorization: `Bearer ${notionSecret}`,
        },
      }
    );

    const projects = response.data.results;

    const projectNames = projects.map((project: ProjectProps) => {
      return project.properties?.이름?.title[0]?.plain_text || "";
    });

    console.log("Project Names:", projectNames);

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
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    return <div>Error loading projects</div>;
  }
}
