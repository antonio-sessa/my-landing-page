"use client";

import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: center;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
`;

const FilterLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.4;
  margin-right: 0.25rem;
`;

const FilterChip = styled.button<{ $active: boolean }>`
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${({ $active }) =>
		$active ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.15)"};
  background: ${({ $active }) =>
		$active ? "rgba(255,255,255,0.15)" : "transparent"};
  color: ${({ $active }) => ($active ? "#f9fafb" : "rgba(255,255,255,0.5)")};
  transition: all 200ms ease;

  &:hover {
    border-color: rgba(255,255,255,0.4);
    color: #f9fafb;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 1.25rem;
  background: rgba(255,255,255,0.1);
  margin: 0 0.25rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

interface FilterBarProps {
	months: string[];
	statuses: string[];
	selectedMonth: string | null;
	selectedStatus: string | null;
	onMonthChange: (month: string | null) => void;
	onStatusChange: (status: string | null) => void;
}

export const FilterBar = ({
	months,
	statuses,
	selectedMonth,
	selectedStatus,
	onMonthChange,
	onStatusChange,
}: FilterBarProps) => {
	return (
		<Bar>
			<FilterGroup>
				<FilterLabel>Month</FilterLabel>
				<FilterChip
					$active={selectedMonth === null}
					onClick={() => onMonthChange(null)}
				>
					All
				</FilterChip>
				{months.map((month) => (
					<FilterChip
						key={month}
						$active={selectedMonth === month}
						onClick={() =>
							onMonthChange(selectedMonth === month ? null : month)
						}
					>
						{month}
					</FilterChip>
				))}
			</FilterGroup>

			<Divider />

			<FilterGroup>
				<FilterLabel>Status</FilterLabel>
				<FilterChip
					$active={selectedStatus === null}
					onClick={() => onStatusChange(null)}
				>
					All
				</FilterChip>
				{statuses.map((status) => (
					<FilterChip
						key={status}
						$active={selectedStatus === status}
						onClick={() =>
							onStatusChange(selectedStatus === status ? null : status)
						}
					>
						{status}
					</FilterChip>
				))}
			</FilterGroup>
		</Bar>
	);
};
