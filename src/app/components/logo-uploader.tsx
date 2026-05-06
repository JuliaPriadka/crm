"use client";

import React from "react";
import Image from 'next/image';

export interface LogoUploaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export default function LogoUploader({label,id,placeholder,...rest}:LogoUploaderProps) {

    return <div className="flex gap-5 mb-3">
        {label&&<p>{label}</p>}
        <label htmlFor={id} className="w-44 h-44 flex flex-col items-center justify-center border border-dashed border-slate-900 rounded-full  cursor-pointer bg-white">
                    <Image
          className="mb-1"
          width={48}
          height={48}
          src="/icons/cloud-arrow-down.svg"
          alt="upload"
        />
            {placeholder&&<p className="text-gray-500">{placeholder}</p>}
            <input id={id} type="file" accept="image/*" className="hidden" {...rest}/>
        </label>
    </div>
};
