import React from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export interface SidebarItemProps {
    active?:boolean;
href:string;
src:string;
alt:string;
children:React.ReactNode;
}

export default function SidebarItem({href,src,alt,children,active}:SidebarItemProps) {
    return (
        <li>
        <Link href={href} className={clsx("flex items-center gap-3.5 mx-1 h-6 after:ml-auto",active&& "after:w-1 after:h-full after:bg-purple-400 after:rounded-2xl")}>
<Image src={src} alt={alt} width={18} height={18}/>
<span className="font-medium text-base text-neutral-50">{children}</span>
        </Link>
        </li>
    )
};
