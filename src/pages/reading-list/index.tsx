import type { GetServerSideProps } from "next";
import { Footer } from "../../components/Footer";
import { Meta } from "../../components/Meta";
import { ReadingList } from "../../components/ReadingList/ReadingList";
import { ReadingListHeader } from "../../components/ReadingList/ReadingListHeader";
import { CV } from "../../components/UI";
import { fetchNotionReadingList } from "../../lib/fetchNotionReadingList";
import { getBaseUrl } from "../../lib/getBaseUrl";
import type { Reading } from "../../types/reading";

let cachedReadings: Reading[] | null = null;
let cacheTimestamp = 0;

interface ReadingListPageProps {
	baseUrl: string;
	readings: Reading[];
}

export default function ReadingListPage({
	baseUrl,
	readings,
}: ReadingListPageProps) {
	return (
		<>
			<Meta baseUrl={baseUrl} title="Antonio Sessa - My Reading List" />
			<ReadingListHeader />
			<CV>
				<ReadingList readings={readings} />
			</CV>
			<Footer />
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const now = Date.now();
	const oneDay = 86_400_000; // 24h in ms

	// If cache is empty or expired, fetch from Notion
	if (!cachedReadings || now - cacheTimestamp > oneDay) {
		try {
			cachedReadings = await fetchNotionReadingList();
			cacheTimestamp = now;
			console.log("[Reading List] Cached data refreshed from Notion");
		} catch (err) {
			console.error("[Reading List] Failed to fetch from Notion:", err);
			cachedReadings = cachedReadings || []; // fallback to old cache if exists
		}
	}

	return {
		props: {
			baseUrl: getBaseUrl(req),
			readings: cachedReadings ?? [],
		},
	};
};
