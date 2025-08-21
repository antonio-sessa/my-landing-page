"use client";

import Script from "next/script";

export function CookieYes() {
	return (
		<Script
			id="cookieyes"
			type="text/javascript"
			src="https://cdn-cookieyes.com/client_data/dc0af3ef68e117d368e4848a/script.js"
			strategy="afterInteractive"
		/>
	);
}
