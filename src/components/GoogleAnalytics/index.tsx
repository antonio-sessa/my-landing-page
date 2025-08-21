"use client";

import Script from "next/script";
import { useEffect } from "react";

export function GoogleAnalytics() {
	useEffect(() => {
		window.dataLayer = window.dataLayer || [];
		function gtag(...args: unknown[]) {
			window.dataLayer.push(args);
		}
		gtag("consent", "default", {
			ad_storage: "denied",
			analytics_storage: "denied",
		});
		gtag("set", "ads_data_redaction", true);
		gtag("set", "url_passthrough", true);
		gtag("js", new Date());
		gtag("config", "GT-MR458Z9");
	}, []);

	return (
		<Script
			data-cookieconsent="ignore"
			src="https://www.googletagmanager.com/gtag/js?id=GT-MR458Z9"
			strategy="afterInteractive"
		/>
	);
}
