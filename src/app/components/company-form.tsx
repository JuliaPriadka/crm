'use client';

import { Form, Formik } from 'formik';
import React from 'react';
import LogoUploader from './logo-uploader';
import InputField from './input-field';
import Button from './button';

export type CompanyFieldValues = {
  status: string;
  country: string;
  name: string;
  category: string;
  date: string;
  description: string;
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFieldValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {
  const initialValues: CompanyFieldValues = {
    status: '',
    country: '',
    name: '',
    category: '',
    date: '',
    description: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-10">
        
          <p className='font-semibold text-xl'>Add new company</p>
       
        <div className='grid grid-cols-2 gap-7'>
            <div className='flex flex-col justify-between w-77'>
                <LogoUploader label="Logo" placeholder="Upload photo" />
            
            <div className='flex flex-col gap-5'>
            
                            <InputField label='Status' name='status' placeholder='Status'/>
                <InputField label='Country' name='country' placeholder='Country'/>
            </div>
            </div>
            <div className='flex flex-col gap-5 w-77'>
                <InputField label='Name' name='name' placeholder='Name'/>
                <InputField label='Category' name='category' placeholder='Category'/>
                <InputField label='Joined data' name='date'type="date" />
                <InputField label='Description' name='description' placeholder='Description'/>
            </div>
        </div>
        <Button type="submit">Add company</Button>
      </Form>
    </Formik>
  );
}
