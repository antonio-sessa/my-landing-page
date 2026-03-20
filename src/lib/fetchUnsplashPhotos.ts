export interface UnsplashPhoto {
	id: string;
	alt_description: string | null;
	urls: {
		regular: string;
		small: string;
	};
	links: {
		html: string;
	};
	width: number;
	height: number;
}

export async function fetchUnsplashPhotos(count = 6): Promise<UnsplashPhoto[]> {
	const accessKey = process.env.UNSPLASH_ACCESS_KEY;
	if (!accessKey) throw new Error("UNSPLASH_ACCESS_KEY is not set");

	const response = await fetch(
		`https://api.unsplash.com/collections/3671975/photos?per_page=${count}`,
		{
			headers: {
				Authorization: `Client-ID ${accessKey}`,
			},
		},
	);

	if (!response.ok) throw new Error("Failed to fetch Unsplash photos");

	return response.json();
}
