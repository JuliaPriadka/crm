import React from 'react';

import css from './stat-card.module.css';
import clsx from 'clsx';

import { StatCardType } from '@/lib/api';


export interface StatCardProps {
  type: StatCardType;
  label: string;
  counter: number;
}

export default function StatCard({ type, label, counter }: StatCardProps) {
  return (
    <div
      className={clsx(
        'rounded-sm flex flex-col',
        type === StatCardType.Light && [css.gradient, 'p-7 gap-5'],
        type === StatCardType.Dark && 'bg-gray-900 p-3 gap-1',
      )}
    >
      <p
        className={clsx(
          'font-normal before:rounded-2xl before:w-4 before:h-1',
          type === StatCardType.Light &&
            'text-xs text-gray-900 before:inline-block before:mr-2 before:align-middle  before:bg-gray-900',
          type === StatCardType.Dark &&
            'text-sm text-zinc-50 before:block before:bg-zinc-50 before:mb-1 text-right',
        )}
      >
        {label}
      </p>
      <p
        className={clsx(
          'font-semibold text-6xl',
          type === StatCardType.Light && 'text-gray-900',
          type === StatCardType.Dark &&
            'even:text-lime-200 odd:text-purple-200',
        )}
      >
        {counter}
      </p>
    </div>
  );
}
