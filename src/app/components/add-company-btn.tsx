'use client';

import React, { useState } from 'react';
import Button from './button';

export default function AddCompanyBtn() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
<>
<Button onClick={()=>setModalIsOpen(true)}>Add company</Button>
</>
  );
}
