import { Client } from "@notionhq/client";
import type {
	PageObjectResponse,
	QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { Reading } from "../types/reading";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function fetchNotionReadingList(): Promise<Reading[]> {
	const databaseId = process.env.NOTION_DATABASE_ID;
	if (!databaseId) {
		throw new Error("NOTION_DATABASE_ID environment variable is not set");
	}

	let response: QueryDatabaseResponse;
	try {
		response = await notion.databases.query({
			database_id: databaseId,
			sorts: [{ property: "CreatedAt", direction: "descending" }],
		});
	} catch (error) {
		console.error("[Notion] Failed to fetch Reading List:", error);
		return [];
	}

	return response.results
		.filter((page): page is PageObjectResponse => "properties" in page)
		.map((page) => {
			const props = page.properties;

			return {
				id: page.id,
				title:
					props.Title?.type === "title"
						? (props.Title.title[0]?.plain_text ?? "Untitled")
						: "Untitled",
				summary:
					props.Summary?.type === "rich_text"
						? (props.Summary.rich_text[0]?.plain_text ?? "")
						: "",
				link:
					props.Link?.type === "url"
						? (props.Link.url ?? undefined)
						: undefined,
				createdAt:
					props.CreatedAt?.type === "date"
						? (props.CreatedAt.date?.start ?? undefined)
						: undefined,
				status:
					props.Status?.type === "select"
						? (props.Status.select?.name ?? undefined)
						: undefined,
			};
		});
}
