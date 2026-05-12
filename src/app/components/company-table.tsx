"use client";

import React from "react";
import { useQuery } from '@tanstack/react-query';
import { getCompanies } from '@/lib/api';

export interface CompanyTableProps {
  children?: React.ReactNode;
}

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

export default function CompanyTable({children}:CompanyTableProps) {
  //     const { data } = useQuery({
  //   queryKey: ['companies'],
  //   queryFn: () => getCompanies(),
  //   staleTime: 10 * 1000,
  // });

    return (
        <div className="py-8 px-10 bg-gray-100">
            <table className="table-auto w-full border-separate border-spacing-y-2">
                <thead>
                    <tr>
                        {headers.map((header,index)=>
                        <th key={index} className="pb-5 font-light">
{header}
                        </th>
                        )}
                    </tr>
                </thead>
                <tbody>
          
            {children}
          
        </tbody>
            </table>
        </div>
    )
};
