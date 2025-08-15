import { headers } from "next/headers";

/**
 * Returns the absolute base URL of the incoming request in the App Router context.
 */
export async function getBaseUrl(): Promise<string> {
	const h = await headers();
	const protocol = h.get("x-forwarded-proto") ?? "https";
	const host = h.get("host") ?? "example.com";
	return `${protocol}://${host}`;
}
