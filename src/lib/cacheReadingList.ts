import { Redis } from "@upstash/redis";
import type { ApiResponse } from "../types/apiResponse";
import { fetchReadingList } from "./fetchReadingList";

const redis = Redis.fromEnv();
const ONE_DAY = 60 * 60 * 24;

export async function getCachedReadingListBatch({
	startCursor,
	pageSize = 5,
}: {
	startCursor?: string;
	pageSize?: number;
}): Promise<ApiResponse> {
	const cacheKey = startCursor ? `readings:${startCursor}` : `readings:first`;

	let batch: ApiResponse | null = await redis.get(cacheKey);

	if (!batch) {
		const { readings, hasMore, nextCursor } = await fetchReadingList({
			pageSize,
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
	return batch;
}
