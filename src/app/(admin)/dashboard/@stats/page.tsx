import React from 'react';

import { stats, } from '@/lib/api';
import StatCard from '@/app/components/stat-card/stat-card';
import { StatCardType } from '@/lib/api';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="grid grid-cols-4 gap-5 h-38">
      {stats.map((stat,index) => (
        
          <StatCard
          key={index}
            label={stat.label}
            counter={stat.counter}
            type={StatCardType.Light}
          />
        
      ))}
    </div>
  );
}
