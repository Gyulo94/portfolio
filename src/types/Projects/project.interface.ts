export default interface ProjectProps {
  id: string;
  properties: {
    Youtube: {
      url: string;
    };
    Github: {
      url: string;
    };
    이름: {
      title: {
        plain_text: string;
      }[];
    };
    설명: {
      rich_text: {
        plain_text: string;
      }[];
    };
    기술: {
      multi_select: {
        name: string;
        color: string;
        id: string;
      }[];
    };
    작업기간: {
      date: {
        start: string;
        end: string;
      };
    };
  };
  cover: {
    file: {
      url: string;
    };
    external: {
      url: string;
    };
  };
  url: string;
}
