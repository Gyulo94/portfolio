import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

(async () => {
  const databaseId = notionDatabaseId || "";
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "In stock",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "Cost of next trip",
          number: {
            greater_than_or_equal_to: 2,
          },
        },
      ],
    },
    sorts: [
      {
        property: "Last ordered",
        direction: "ascending",
      },
    ],
  });
})();
