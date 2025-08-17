import type { Reading } from "./reading";

export interface ApiResponse {
	readings: Reading[];
	hasMore: boolean;
	nextCursor: string | null;
}
