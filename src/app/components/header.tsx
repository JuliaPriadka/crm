import React from 'react';
import Image from 'next/image';
import avatar from '../../../public/images/avatar.png';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="px-10 py-6 flex items-center border-b border-gray-300 justify-between">
      <p className="font-semibold text-4xl">{children}</p>
      <div className="flex gap-3 pl-5 border-l border-gray-300">
        <Image width={44} height={44} src={avatar} alt="avatar" />
        <div>
          <p className="font-semibold text-base">Adam Smith</p>
          <p className="font-light text-sm">adamsmith@gmail.com</p>
        </div>
      </div>
    </header>
  );
}
