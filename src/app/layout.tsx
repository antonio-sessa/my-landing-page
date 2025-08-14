"use client"; // needed for StyledComponentsRegistry only

import Script from "next/script";
import { GlobalStyle } from "../components/GlobalStyle";
import StyledComponentsRegistry from "./lib/registry";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head />
			<body>
				<StyledComponentsRegistry>
					<GlobalStyle />
					{children}
				</StyledComponentsRegistry>

				<Script
					data-cookieconsent="ignore"
					id="google-analytics"
					strategy="afterInteractive"
				>
					{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('consent', 'default', {ad_storage:'denied', analytics_storage:'denied'});
            gtag('set', 'ads_data_redaction', true);
            gtag('set', 'url_passthrough', true);
            gtag('js', new Date());
            gtag('config', 'GT-MR458Z9');
          `}
				</Script>
				<Script
					data-cookieconsent="ignore"
					src="https://www.googletagmanager.com/gtag/js?id=GT-MR458Z9"
					strategy="afterInteractive"
				/>

				<Script
					id="cookieyes"
					type="text/javascript"
					src="https://cdn-cookieyes.com/client_data/dc0af3ef68e117d368e4848a/script.js"
				/>
			</body>
		</html>
	);
}
