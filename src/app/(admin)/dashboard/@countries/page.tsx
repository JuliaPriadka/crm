import DashboardCard from '@/app/components/dashboard-card';
import React from 'react';
import { countriesSummary } from '@/lib/api';
import Image from 'next/image';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <DashboardCard label="Countries of companies">
      <div className="pl-5 pr-5 pb-5 flex gap-5 items-end">
        <ul className="list-none font-medium text-sm flex flex-none flex-col gap-2">
          {countriesSummary.map((country, index) => (
            <li
              key={index}
              className="flex items-center before:w-2 before:h-2 before:bg-purple-200 before:rounded-full before:mr-1.5"
            >
              <p>{country.name} - </p>
              <p>{country.counter}</p>
            </li>
          ))}
        </ul>
        <Image
          width={395}
          height={260}
          src="/images/world.svg"
          alt="world"
        />
      </div>
    </DashboardCard>
  );
}
