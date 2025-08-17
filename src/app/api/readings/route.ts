import { NextResponse } from "next/server";
import { getCachedReadingListBatch } from "../../../lib/cacheReadingList";

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const cursorParam = searchParams.get("cursor") || undefined;
		const startCursor =
			cursorParam && cursorParam.length > 0 ? cursorParam : undefined;

		const batch = await getCachedReadingListBatch({
			startCursor,
			pageSize: 5,
		});

		return NextResponse.json(batch);
	} catch (err) {
		console.error("[API] Error:", err);
		return NextResponse.json(
			{
				readings: [],
				hasMore: false,
				nextCursor: null,
			},
			{ status: 200 },
		);
	}
}
