"use client";

import { TopNav } from "../TopNav";

const items = [
	{
		label: "\u2190 Back to Home",
		type: "route" as const,
		href: "/",
		ariaLabel: "Back to Home",
	},
	{ label: "Top", type: "scroll-top" as const },
];

export const ReadingListNav = () => {
	return <TopNav items={items} />;
};
