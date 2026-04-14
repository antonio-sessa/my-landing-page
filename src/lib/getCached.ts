import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
const ONE_DAY = 60 * 60 * 24;

type CacheOptions<T> = {
	key: string;
	fetcher: () => Promise<T>;
	ttl?: number;
};

export async function getCached<T>({
	key,
	fetcher,
	ttl = ONE_DAY,
}: CacheOptions<T>): Promise<T> {
	const cached = await redis.get<T>(key);

	if (cached) {
		console.log(`[Cache] Loaded from cache: ${key}`);
		return cached;
	}

	const fresh = await fetcher();
	await redis.set(key, fresh, { ex: ttl });
	console.log(`[Cache] Cached new value: ${key}`);

	return fresh;
}
