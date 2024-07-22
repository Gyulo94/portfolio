import { ProjectProps } from "@/types";
import Image from "next/image";
import "./style.css";

export default function ProjectItem(data: ProjectProps) {
  const title = data.properties?.이름?.title[0]?.plain_text;
  const github = data.properties?.Github?.url;
  const youtube = data.properties?.Youtube?.url;
  const description = data.properties?.설명?.rich_text[0]?.plain_text;
  const imgSrc = data.cover?.file?.url || data.cover?.external?.url;
  const projectUrl = data.url;
  const tags = data.properties.기술?.multi_select;
  const start = data.properties.작업기간?.date?.start;
  const end = data.properties.작업기간?.date?.end;

  const calculatedPeriod = (start: string, end: string): number => {
    if (!start || !end) {
      start = "????-??-??";
      end = "????-??-??";
    }
    const startDateArray = start.split("-");
    const endDateArray = end.split("-");

    const startDate = new Date(
      parseInt(startDateArray[0]),
      parseInt(startDateArray[1]) - 1,
      parseInt(startDateArray[2])
    );
    const endDate = new Date(
      parseInt(endDateArray[0]),
      parseInt(endDateArray[1]) - 1,
      parseInt(endDateArray[2])
    );

    const diffInMs = Math.abs(endDate.getTime() - startDate.getTime());
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card">
      <a href={projectUrl}>
        <div className="project-image-wrapper">
          <Image
            src={imgSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <h1 className="project-title">{title}</h1>
      </a>
      <h3 className="project-description">{description}</h3>
      <a href={github}>깃허브 바로가기</a>
      {youtube !== null ? <a href={youtube}>유튜브 바로가기</a> : null}
      <h3 className="project-period">
        작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
      </h3>
      <div className="project-skills-wrapper">
        {tags?.map((tag) => (
          <h2
            className="project-skills"
            style={{
              backgroundColor: `${
                tag.color !== "default" ? tag.color : "#7925d3"
              }`,
            }}
            key={tag.id}
          >
            {tag.name}
          </h2>
        ))}
      </div>
    </div>
  );
}
