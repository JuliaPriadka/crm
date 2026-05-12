import React from 'react';
import Header from '../../components/header';
import Toolbar from '../../components/toolbar';
import SearchInput from '../../components/search-input';
import AddCompanyBtn from '../../components/add-company-btn';
import CompanyTable from '../../components/company-table';
import CompanyRow from '../../components/company-row';
import { Status } from '@/lib/api';

export interface PageProps {}

export default function Page({}: PageProps) {
  return <>
    <Header>Companies</Header>
    <main>
    <Toolbar action={<AddCompanyBtn />}>
      <SearchInput />
    </Toolbar>
    <CompanyTable>
      <CompanyRow
        id="1"
        category='Products'
        name='Costco Wholesale'
        status={Status.Active}
        promotion={true}
        country='USA'
        date='19.02.2023'
      />
    </CompanyTable>
    </main>
  </>;
}
