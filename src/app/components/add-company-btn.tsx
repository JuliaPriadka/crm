'use client';

import React, { useState } from 'react';
import Button from './button';
import dynamic from 'next/dynamic';

const CompanyFormModal = dynamic(()=>import("./company-form-modal"),{
  ssr:false,
})

export default function AddCompanyBtn() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
<>
<Button onClick={()=>setModalIsOpen(true)}>Add company</Button>
<CompanyFormModal onSubmit={console.log} show={modalIsOpen} onClose={()=>setModalIsOpen(false)}/>
</>
  );
}
