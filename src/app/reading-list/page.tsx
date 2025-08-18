import type { Metadata } from "next";
import { Content } from "../../components/Content";
import { Footer } from "../../components/Footer";
import InfiniteReadings from "../../components/Sections/ReadingList/InfiniteReadings";
import { ReadingListHeader } from "../../components/Sections/ReadingList/ReadingListHeader";
import { getCachedReadingListBatch } from "../../lib/cacheReadingList";
import { getBaseUrl } from "../../lib/getBaseUrl";

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
	const batch = await getCachedReadingListBatch({
		startCursor: undefined,
		pageSize: 5,
	});

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
