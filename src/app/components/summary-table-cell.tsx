import clsx from 'clsx';
import React from 'react';

export interface SummaryTableCellProps {
    align?:"left"|"right"|"center";
    children:React.ReactNode;
}

export default function SummaryTableCell({align,children}:SummaryTableCellProps) {
  return (
    <td className={clsx(`text-${align} py-2 px-5`)}>{children}</td>
  );
}
