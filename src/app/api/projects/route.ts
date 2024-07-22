import axios from "axios";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const notionSecret = process.env.NOTION_TOKEN;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

export async function GET() {
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
    revalidatePath("/api/projects");

    return NextResponse.json(response.data.results);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.error();
  }
}
