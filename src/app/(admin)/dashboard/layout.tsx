import React from "react";

export interface LayoutProps{
    children:React.ReactNode;
    stats:React.ReactNode;
}

export default function Layout({children,stats}:LayoutProps) {
    return (
        <div >
            {children}
        <div className="h-38 mt-10 ml-10 mr-10">{stats}</div>
        </div>
    )
};
