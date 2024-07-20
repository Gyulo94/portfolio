import ProjectItem from "@/components/projects";
import { ProjectProps } from "@/types";
import "./style.css";

const notionSecret = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

export default async function Projects() {
  const option = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${notionSecret}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };
  const res = await fetch(
    `https://api.notion.com/v1/databases/${notionDatabaseId}/query`,
    option
  );
  const projects = await res.json();

  const projectNames = projects.results.map((project: ProjectProps) => {
    project.properties?.이름?.title[0]?.plain_text;
  });

  return (
    <div id="project-wrapper">
      <h1 className="project-count">
        찰규의 프로젝트의 수는?
        <span style={{ color: "#7925d3" }}> {projectNames.length}</span>
      </h1>
      <div className="project-container">
        {projects.results.map((project: ProjectProps) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
