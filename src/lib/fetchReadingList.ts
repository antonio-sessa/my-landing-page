import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Reading } from "../types/reading";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

interface FetchOptions {
	pageSize?: number;
	startCursor?: string;
}

export async function fetchReadingList({
	pageSize = 5,
	startCursor,
}: FetchOptions = {}): Promise<{
	readings: Reading[];
	hasMore: boolean;
	nextCursor?: string;
}> {
	const dataSourceId = process.env.NOTION_DATA_SOURCE_ID;
	if (!dataSourceId) {
		throw new Error("NOTION_DATA_SOURCE_ID is not set");
	}

	const response = await notion.dataSources.query({
		data_source_id: dataSourceId,
		page_size: pageSize,
		...(startCursor ? { start_cursor: startCursor } : {}),
		sorts: [{ property: "CreatedAt", direction: "descending" }],
	});

	const readings: Reading[] = response.results
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
						? props.Summary.rich_text.map((rt) => rt.plain_text).join("\n")
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

	return {
		readings,
		hasMore: response.has_more,
		nextCursor: response.next_cursor ?? undefined,
	};
}
