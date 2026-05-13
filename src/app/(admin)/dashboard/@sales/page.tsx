import DashboardCard from "@/app/components/dashboard-card";
import SummaryTable from "@/app/components/summary-table";
import SummaryTableHeader from "@/app/components/summary-table-header";
import React from "react";
import {summarySales} from "@/lib/api"
import SummaryTableCell from "@/app/components/summary-table-cell";

export interface PageProps{}

export default function Page({}:PageProps) {
    return(
        <DashboardCard label="Sales details">
            <SummaryTable headers={
                <>
                <SummaryTableHeader align="left">Company</SummaryTableHeader>
                <SummaryTableHeader align="center">Sold</SummaryTableHeader>
                <SummaryTableHeader align="center">Income</SummaryTableHeader>
                </>
            }>
                {summarySales.map((sale,index)=>(
<tr key={index} >
    <SummaryTableCell align="left">{sale.name}</SummaryTableCell>
    <SummaryTableCell align="center">{sale.sold}</SummaryTableCell>
    <SummaryTableCell align="center">{`$${sale.income}`}</SummaryTableCell>
</tr>
                ))
                    }
            </SummaryTable>
        </DashboardCard>
    )
};
