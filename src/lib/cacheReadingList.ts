import type { ApiResponse } from "../types/apiResponse";
import { fetchReadingList } from "./fetchReadingList";
import { getCached } from "./getCached";

export async function getCachedReadingListBatch({
	startCursor,
	pageSize = 50,
}: {
	startCursor?: string;
	pageSize?: number;
}): Promise<ApiResponse> {
	const cacheKey = startCursor ? `readings:${startCursor}` : "readings:first";

	return getCached<ApiResponse>({
		key: cacheKey,
		fetcher: async () => {
			const { readings, hasMore, nextCursor } = await fetchReadingList({
				pageSize,
				startCursor,
			});

			return {
				readings,
				hasMore,
				nextCursor: nextCursor ?? null,
			};
		},
	});
}
