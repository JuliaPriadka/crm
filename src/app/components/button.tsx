'use client';

import React from 'react';
import clsx from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export default function Button({disabled,...rest}:ButtonProps) {
  return (
    <button
    {...rest}
      className={clsx("h-11 rounded-2xl px-5 py-2.5 bg-gray-900 text-zinc-50 font-medium outline-none border-none ",disabled &&"text-zinc-100",!disabled&&" hover:bg-gray-800 active:bg-gray-950")}
    >
      Add company
    </button>
  );
}
