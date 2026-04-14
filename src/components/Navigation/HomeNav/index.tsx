"use client";

import { TopNav } from "../TopNav";

const items = [
	{ label: "Top", type: "scroll-top" as const },
	{ label: "About", type: "scroll-to" as const, target: "#about" },
	{ label: "Photography", type: "scroll-to" as const, target: "#photography" },
	{ label: "Experience", type: "scroll-to" as const, target: "#experience" },
];

export const HomeNav = () => {
	return <TopNav items={items} />;
};
