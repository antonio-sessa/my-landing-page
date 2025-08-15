import { Redis } from "@upstash/redis";
import type { Metadata } from "next";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import InfiniteReadings from "../../components/ReadingList/InfiniteReadings";
import { ReadingListHeader } from "../../components/ReadingList/ReadingListHeader";
import { fetchNotionReadingList } from "../../lib/fetchNotionReadingList";
import { getBaseUrl } from "../../lib/getBaseUrl";
import type { Reading } from "../../types/reading";

const redis = Redis.fromEnv();
const ONE_DAY = 60 * 60 * 24;

export async function generateMetadata(): Promise<Metadata> {
	const baseUrl = await getBaseUrl();

	const title = "My Reading List - Antonio Sessa";
	const description =
		"A curated reading list by Antonio Sessa covering Quality Assurance, Photography, Personal Finance and more.";

	return {
		title,
		description,
		alternates: {
			canonical: `${baseUrl}/reading-list`,
		},
		openGraph: {
			title,
			description,
			url: `${baseUrl}/reading-list`,
			images: `${baseUrl}/media/images/landing-scaled.jpg`,
			type: "website",
		},
	};
}

export default async function ReadingListPage() {
	const cacheKey = "readings:first";

	let batch: {
		readings: Reading[];
		hasMore: boolean;
		nextCursor: string | null;
	} | null = await redis.get(cacheKey);

	if (!batch) {
		const { readings, hasMore, nextCursor } = await fetchNotionReadingList({
			pageSize: 5,
		});
		batch = { readings, hasMore, nextCursor: nextCursor ?? null };
		await redis.set(cacheKey, batch, { ex: ONE_DAY });
		console.log("[SSR] Fetched from Notion");
	} else {
		console.log("[SSR] Loaded from cache");
	}

	return (
		<>
			<ReadingListHeader />
			<Content>
				<InfiniteReadings
					initialReadings={batch.readings}
					initialHasMore={batch.hasMore}
					initialCursor={batch.nextCursor}
				/>
			</Content>
			<Footer />
		</>
	);
}
