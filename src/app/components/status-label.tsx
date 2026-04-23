import React from 'react';
import clsx from 'clsx';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
}

export default function StatusLabel({
  children,
  status,
  disabled,
}: StatusLabelProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-3xl py-1 px-3.5 font-medium text-sm',
        status === Status.Active && 'bg-green-100 text-green-700',
        status === Status.NotActive && 'bg-red-100 text-red-700',
        status === Status.Pending && 'bg-orange-100 text-orange-700',
        status === Status.Suspended && 'bg-blue-100 text-blue-700',
        {
            [`opacity-75 cursor-not-allowed`]:disabled,
        }
      )}
    >
      <div className="w-1 h-1 bg-current rounded-2xl"></div>
      {children}
    </div>
  );
}
