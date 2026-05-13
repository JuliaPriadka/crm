import React from "react";

export interface DashboardCardProps{
label:string;
children:React.ReactNode;
}

export default function DashboardCard({label,children}:DashboardCardProps) {
    return (
        <div className="bg-gray-100 rounded-sm ">
            <p className="p-4 font-medium text-xl">{label}</p>
            <div>{children}</div>
        </div>
    )
};
