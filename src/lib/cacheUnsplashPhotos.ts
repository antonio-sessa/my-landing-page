import { Redis } from "@upstash/redis";
import type { UnsplashPhoto } from "../types/unsplashPhoto";
import { fetchUnsplashPhotos } from "./fetchUnsplashPhotos";

const redis = Redis.fromEnv();
const ONE_DAY = 60 * 60 * 24;
const CACHE_KEY = "unsplash:photos";

export async function getCachedUnsplashPhotos(): Promise<UnsplashPhoto[]> {
	let photos: UnsplashPhoto[] | null = await redis.get(CACHE_KEY);

	if (!photos) {
		photos = await fetchUnsplashPhotos(6);
		await redis.set(CACHE_KEY, photos, { ex: ONE_DAY });
		console.log("[Unsplash] Cached new photos");
	} else {
		console.log("[Unsplash] Loaded from cache");
	}

	return photos;
}
