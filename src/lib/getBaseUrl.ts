import type { GetServerSidePropsContext } from "next";

export function getBaseUrl(req: GetServerSidePropsContext["req"]) {
	const protocol = (req.headers["x-forwarded-proto"] as string) || "https";
	const host = req.headers.host || "antoniosessa.com";
	return `${protocol}://${host}`;
}
