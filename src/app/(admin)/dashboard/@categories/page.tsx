import React from "react";

import {categoriesStats} from "@/lib/api";
import DashboardCard from "@/app/components/dashboard-card";
import StatCard from "@/app/components/stat-card";
import {StatCardType} from "@/lib/api";

export interface PageProps {}

export default function Page({}:PageProps) {
    return (
        <DashboardCard label="Categories of companies">
            <div className="px-4 pb-4 gap-3 grid grid-cols-4">
                {categoriesStats.map((category,index)=>(
                    <StatCard key={index} label={category.label} counter={category.counter} type={StatCardType.Dark}/>
                ))}
            </div>
        </DashboardCard>
    )
};
