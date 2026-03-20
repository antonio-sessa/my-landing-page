import { NextResponse } from "next/server";
import { getCachedUnsplashPhotos } from "../../../lib/cacheUnsplashPhotos";

export async function GET() {
	try {
		const photos = await getCachedUnsplashPhotos();
		return NextResponse.json({ photos });
	} catch (err) {
		console.error("[API] Error fetching photos:", err);
		return NextResponse.json({ photos: [] }, { status: 200 });
	}
}
