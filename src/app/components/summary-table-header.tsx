import clsx from 'clsx';
import React from 'react';

export interface SummaryTableHeaderProps {
  children: React.ReactNode;
  align?:"left"|"right"|"center";
}

export default function SummaryTableHeader({
    align,
  children,
}: SummaryTableHeaderProps) {
  return (
    <th
      className={clsx(
        `py-2 px-5 font-normal text-xs, [&:nth-child(3n+1)]:bg-gray-900 [&:nth-child(3n+2)]:bg-purple-200 [&:nth-child(3n+3)]:bg-lime-200 [&:nth-child(3n+1)]:text-white ![&:nth-child(3n+1)]:text-gray-900, text-${align}`,
      )}
    >
      {children}
    </th>
  );
}
