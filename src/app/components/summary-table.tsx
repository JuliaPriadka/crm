import React from "react";

export interface SummaryTableProps{
headers:React.ReactNode;
children:React.ReactNode;
}

export default function SummaryTable({headers,children}:SummaryTableProps) {
    return(
        <table className="table-auto w-full h-full">
<thead>
    <tr>{headers}</tr>
</thead>
<tbody className=" [&>tr:nth-child(2n+1)]:bg-white [&>tr:nth-child(2n+2)]:bg-gray-100">
    {children}
</tbody>
        </table>
    )
};
