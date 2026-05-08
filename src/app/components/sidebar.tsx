import React from "react";
import Image from "next/image";
import SidebarItem from "./sidebar-item";

export interface SidebarProps{};


export default function Sidebar({}:SidebarProps) {
    return(
        <aside className="fixed top-0 left-0 w-60 h-screen">
<div className="bg-gray-900 flex flex-col h-full overflow-y-auto pt-8 pb-10 pl-4">
<Image src="/icons/Frame 1000003593.png" width={122} height={24 }alt="logo" className="mb-20 mx-auto"/>
<ul className="flex flex-col gap-7">
<SidebarItem href="/dashboard" src="/icons/squares-2x2.png" alt="squares picture">Dashboard</SidebarItem>
<SidebarItem href="/companies" src="/icons/briefcase.png" alt="briefcase picture">Companies</SidebarItem>
</ul>
<button type="button" className="flex items-center gap-2 mt-auto mx-auto">
<Image src="/icons/arrow-left-on-rectangle.png" alt="exit" width={18} height={18}/>
<span className="font-medium text-neutral-50 text-base">Exit</span>
</button>
</div>
        </aside>
    )
};
