import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";
import { fetchNotionReadingList } from "../../../lib/fetchNotionReadingList";
import type { Reading } from "../../../types/reading";

const redis = Redis.fromEnv();
const ONE_DAY = 60 * 60 * 24;

interface ApiResponse {
	readings: Reading[];
	hasMore: boolean;
	nextCursor: string | null;
}

export async function GET(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const cursorParam = searchParams.get("cursor") || undefined;
		const startCursor =
			cursorParam && cursorParam.length > 0 ? cursorParam : undefined;

		const cacheKey = startCursor ? `readings:${startCursor}` : `readings:first`;

		let batch: ApiResponse | null = await redis.get(cacheKey);

		if (!batch) {
			const { readings, hasMore, nextCursor } = await fetchNotionReadingList({
				pageSize: 5,
				startCursor,
			});

			batch = {
				readings,
				hasMore,
				nextCursor: nextCursor ?? null,
			};

			await redis.set(cacheKey, batch, { ex: ONE_DAY });
			console.log(`[API] Cached new batch: ${cacheKey}`);
		} else {
			console.log(`[API] Loaded from cache: ${cacheKey}`);
		}

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
