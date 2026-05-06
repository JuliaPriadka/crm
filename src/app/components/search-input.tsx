import React from "react";
import Image from 'next/image';
import magnifyingGlass from "../../../public/icons/magnifying-glass.png";

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SearchInput({
  onSearchClick,
  ...rest
}: SearchInputProps) {
    return (
        <div className="relative w-96">
        <input {...rest} type="text" className="w-full h-11 pt-3 pb-3 pl-3 pr-9 font-medium text-sm border rounded-sm bg-gray-50 border-gray-300 placeholder:text-gray-600"/>
        <button type="button" className="absolute top-3 right-3" onClick={onSearchClick}>
            <Image width={20} height={20} src={magnifyingGlass} alt="magnifying glass" />
        </button>
        </div>
    )
};
