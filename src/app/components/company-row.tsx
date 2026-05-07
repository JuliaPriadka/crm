import React from "react";

import Link from 'next/link';
import StatusLabel from "./status-label";
import Image from 'next/image';
import check from "../../../public/icons/check.png";
import xMark from "../../../public/icons/x-mark.png";
import clsx from "clsx";
import { Status } from "@/utils/api";


export interface CompanyRowProps {
   id: string;
   category: string;
   name: string;
   status: Status;
   promotion: boolean;
   country: string;
   date: string;
}

const labelByStatus = {
  [Status.Active]: 'Active',
  [Status.NotActive]: 'Not Active',
  [Status.Pending]: 'Pending',
  [Status.Suspended]: 'Suspended',
};

export default function CompanyRow({id,category,name,status,promotion,country,date}:CompanyRowProps) {
    return(

<tr className="h-14 bg-white p-3 text-center rounded-sm">
    <td className="text-xs font-medium text-blue-700 border-l-4 border-blue-700">{category}</td>
<td><a href={`/companies/${id}`}>{name}</a></td>
<td>
    <StatusLabel status={status} label={labelByStatus[status]}/>
</td>
<td >
    <div className="inline-flex items-center gap-1">
<Image width={16} height={16} src={promotion? check : xMark} alt="promotion icon"/>
<span className={clsx("font-medium", promotion? "text-green-700":"text-red-700")}>{promotion? "Yes" : "No"}</span>
</div>
</td>
<td>{country}</td>
<td>{date}</td>
</tr>

    )
};
