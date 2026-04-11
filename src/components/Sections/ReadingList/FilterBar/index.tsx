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

const Select = styled.select`
  padding: 0.3rem 2rem 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.6rem center;
  transition: border-color 200ms, color 200ms;

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
    color: #f9fafb;
  }

  option {
    background: #1f2937;
    color: #f9fafb;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 1.25rem;
  background: rgba(255, 255, 255, 0.1);

  @media (max-width: 600px) {
    display: none;
  }
`;

const Count = styled.span`
  font-size: 0.8rem;
  opacity: 0.4;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

interface FilterBarProps {
	months: string[];
	statuses: string[];
	selectedMonth: string | null;
	selectedStatus: string | null;
	onMonthChange: (month: string | null) => void;
	onStatusChange: (status: string | null) => void;
	filteredCount: number;
	totalCount: number;
}

export const FilterBar = ({
	months,
	statuses,
	selectedMonth,
	selectedStatus,
	onMonthChange,
	onStatusChange,
	filteredCount,
	totalCount,
}: FilterBarProps) => {
	return (
		<Bar>
			<FilterGroup>
				<FilterLabel>Month</FilterLabel>
				<Select
					value={selectedMonth ?? ""}
					onChange={(e) => onMonthChange(e.target.value || null)}
				>
					<option value="">All</option>
					{months.map((month) => (
						<option key={month} value={month}>
							{month}
						</option>
					))}
				</Select>
			</FilterGroup>

			<Divider />

			<FilterGroup>
				<FilterLabel>Status</FilterLabel>
				<Select
					value={selectedStatus ?? ""}
					onChange={(e) => onStatusChange(e.target.value || null)}
				>
					<option value="">All</option>
					{statuses.map((status) => (
						<option key={status} value={status}>
							{status}
						</option>
					))}
				</Select>
			</FilterGroup>

			<Divider />
			<Count>
				{filteredCount} / {totalCount} article{totalCount !== 1 ? "s" : ""}
			</Count>
		</Bar>
	);
};
