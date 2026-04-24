'use client';

import { Field } from 'formik';
import React from 'react';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="font-normal text-base">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="border border-solid border-grey-300 rounded-sm w-77 h-11 p-3 shadow placeholder:text-gray-500"
      />
    </div>
  );
}
