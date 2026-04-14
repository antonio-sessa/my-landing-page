import type { UnsplashPhoto } from "../types/unsplashPhoto";
import { fetchUnsplashPhotos } from "./fetchUnsplashPhotos";
import { getCached } from "./getCached";

const CACHE_KEY = "unsplash:photos";

export async function getCachedUnsplashPhotos(): Promise<UnsplashPhoto[]> {
	return getCached<UnsplashPhoto[]>({
		key: CACHE_KEY,
		fetcher: () => fetchUnsplashPhotos(6),
	});
}
