import DashboardCard from "@/app/components/dashboard-card";
import SummaryTable from "@/app/components/summary-table";
import SummaryTableHeader from "@/app/components/summary-table-header";
import React from "react";
import {summaryPromotions} from "@/lib/api";
import SummaryTableCell from "@/app/components/summary-table-cell";

export interface PageProps{}

export default function Page({}:PageProps) {
    return(
        <DashboardCard label="Promotions">
            <SummaryTable headers={
                <>
                <SummaryTableHeader align="left">Company</SummaryTableHeader>
                <SummaryTableHeader align="left">Name</SummaryTableHeader>
                <SummaryTableHeader align="center">%</SummaryTableHeader>
                </>
            }>
                {summaryPromotions.map((promotion,index)=>(
                    <tr key={index}>
                        <SummaryTableCell align="left">{promotion.company}</SummaryTableCell>
                        <SummaryTableCell align="center">{promotion.name}</SummaryTableCell>
                        <SummaryTableCell align="center">{promotion.percent}%</SummaryTableCell>
                    </tr>
                ))}
            </SummaryTable>
        </DashboardCard>
    )
};
