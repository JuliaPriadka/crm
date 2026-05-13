import React from "react";

export interface LayoutProps{
    children:React.ReactNode;
    stats:React.ReactNode;
    categories:React.ReactNode;
}

export default function Layout({children,stats,categories}:LayoutProps) {
    return (
        <div >
            {children}
        <div className="h-38 mt-10 ml-10 mr-10 mb-4">{stats}</div>
        <div className="h-78 flex gap-10 ml-10 mr-10 mb-4">
<div className="w-115"></div>
<div className="w-163">{categories}</div>
        </div>
        </div>
    )
};
