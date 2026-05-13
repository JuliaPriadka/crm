import React from "react";

export interface LayoutProps{
    children:React.ReactNode;
    stats:React.ReactNode;
    categories:React.ReactNode;
    sales:React.ReactNode;
    promotions:React.ReactNode;
    countries:React.ReactNode;
}

export default function Layout({children,stats,categories,sales,promotions,countries}:LayoutProps) {
    return (
        <div >
            {children}
            <main className="grid grid-cols-12 gap-5 py-10 px-6">
        <div className="h-38 col-span-12">{stats}</div>
        
<div className="h-80 col-span-5">{sales}</div>
<div className="h-80 col-span-7">{categories}</div>
<div className="h-84 col-span-6">{countries}</div>
<div className="h-84 col-span-6">{promotions}</div>
       </main>
        </div>
        
    )
};
