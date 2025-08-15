"use client";

import { useServerInsertedHTML } from "next/navigation";
import * as React from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import { GlobalStyle } from "../../components/GlobalStyle";

export default function StyledComponentsRegistry({
	children,
}: {
	children: React.ReactNode;
}) {
	const [sheet] = React.useState(() => new ServerStyleSheet());

	useServerInsertedHTML(() => {
		const styles = sheet.getStyleElement();
		sheet.instance.clearTag();
		return <>{styles}</>;
	});

	// This check allows client-side rendering after hydration
	if (typeof window !== "undefined") {
		return (
			<>
				<GlobalStyle />
				{children}
			</>
		);
	}

	// Server side, wrap children to collect styles
	return (
		<StyleSheetManager sheet={sheet.instance}>
			<GlobalStyle />
			{children}
		</StyleSheetManager>
	);
}
