import type { UnsplashPhoto } from "../types/unsplashPhoto";

export async function fetchUnsplashPhotos(count = 6): Promise<UnsplashPhoto[]> {
	const accessKey = process.env.UNSPLASH_ACCESS_KEY;
	if (!accessKey) throw new Error("UNSPLASH_ACCESS_KEY is not set");

	const collectionId = process.env.UNSPLASH_COLLECTION_ID;
	if (!collectionId) throw new Error("UNSPLASH_COLLECTION_ID is not set");

	const response = await fetch(
		`https://api.unsplash.com/photos/random?collections=${collectionId}&count=${count}`,
		{
			headers: {
				Authorization: `Client-ID ${accessKey}`,
			},
		},
	);

	if (!response.ok) throw new Error("Failed to fetch Unsplash photos");

	return response.json();
}
