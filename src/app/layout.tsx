import { CookieYes } from "../components/CookieYes";
import { GoogleAnalytics } from "../components/GoogleAnalytics";
import StyledComponentsRegistry from "./lib/registry";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<CookieYes />
			</head>
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
				<GoogleAnalytics />
			</body>
		</html>
	);
}
