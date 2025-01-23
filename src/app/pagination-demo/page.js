'use client'
import Link from 'next/link'
import {useState} from 'react';
import {PageExample} from '../../components/paginated/Page.js'

const Page = ({children}) => {
  return (
    <>
      <h1 className='mb-8'>Pagination with JSON placeholder data</h1>
    <PageExample/>
    </>
  )
}

export default Page
