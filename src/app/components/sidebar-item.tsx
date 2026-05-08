import React from "react";
import Image from "next/image";

export interface SidebarItemProps {
href:string;
src:string;
alt:string;
children:React.ReactNode;
}

export default function SidebarItem({href,src,alt,children}:SidebarItemProps) {
    return (
        <li>
        <a href={href} className="flex items-center gap-3.5">
<Image src={src} alt={alt} width={18} height={18}/>
<span className="font-medium text-base text-neutral-50">{children}</span>
        </a>
        </li>
    )
};
