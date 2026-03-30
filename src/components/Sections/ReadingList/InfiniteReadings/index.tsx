"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Reading } from "../../../../types/reading";
import { FilterBar } from "../FilterBar";
import { ReadingList } from "../ReadingList";

interface InfiniteReadingsProps {
	initialReadings: Reading[];
	initialHasMore: boolean;
	initialCursor: string | null;
}

export default function InfiniteReadings({
	initialReadings,
	initialHasMore,
	initialCursor,
}: InfiniteReadingsProps) {
	const [readings, setReadings] = useState<Reading[]>(initialReadings);
	const [hasMore, setHasMore] = useState(initialHasMore);
	const [nextCursor, setNextCursor] = useState<string | null>(initialCursor);
	const [loading, setLoading] = useState(false);
	const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
	const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
	const loaderRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!hasMore || !nextCursor || loading) return;

		const observer = new IntersectionObserver(
			async (entries) => {
				if (entries[0].isIntersecting && hasMore && nextCursor && !loading) {
					setLoading(true);
					try {
						const res = await fetch(
							`/api/readings?cursor=${encodeURIComponent(nextCursor)}`,
						);
						if (!res.ok) throw new Error("API request failed");

						const {
							readings: newReadings,
							hasMore: more,
							nextCursor: nCursor,
						} = await res.json();

						setReadings((prev) => [...prev, ...newReadings]);
						setHasMore(more);
						setNextCursor(nCursor ?? null);
					} catch (err) {
						console.error("Infinite scroll error:", err);
						setHasMore(false);
						setNextCursor(null);
					} finally {
						setLoading(false);
					}
				}
			},
			{ threshold: 1.0 },
		);

		if (loaderRef.current) observer.observe(loaderRef.current);
		return () => observer.disconnect();
	}, [hasMore, nextCursor, loading]);

	// Derive available months and statuses from loaded readings
	const months = useMemo(() => {
		const set = new Set<string>();
		for (const r of readings) {
			if (r.createdAt) {
				const label = new Date(r.createdAt).toLocaleDateString("en-US", {
					year: "numeric",
					month: "short",
				});
				set.add(label);
			}
		}
		return Array.from(set);
	}, [readings]);

	const statuses = useMemo(() => {
		const set = new Set<string>();
		for (const r of readings) {
			if (r.status) set.add(r.status);
		}
		return Array.from(set);
	}, [readings]);

	// Apply filters
	const filteredReadings = useMemo(() => {
		return readings.filter((r) => {
			const monthLabel = r.createdAt
				? new Date(r.createdAt).toLocaleDateString("en-US", {
						year: "numeric",
						month: "short",
					})
				: null;

			if (selectedMonth && monthLabel !== selectedMonth) return false;
			if (selectedStatus && r.status !== selectedStatus) return false;
			return true;
		});
	}, [readings, selectedMonth, selectedStatus]);

	return (
		<>
			<FilterBar
				months={months}
				statuses={statuses}
				selectedMonth={selectedMonth}
				selectedStatus={selectedStatus}
				onMonthChange={setSelectedMonth}
				onStatusChange={setSelectedStatus}
			/>
			<ReadingList readings={filteredReadings} />
			{hasMore && <div ref={loaderRef} style={{ height: "2rem" }} />}
			{loading && (
				<div
					style={{ textAlign: "center", padding: "1rem", fontSize: "0.9rem" }}
				>
					Loading…
				</div>
			)}
		</>
	);
}
