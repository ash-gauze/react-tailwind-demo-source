'use client'

import {Pagination} from '../../components/paginated/index.tsx'



const Page = ({children}:{ReactNode}) => {
  return (
    <>
      <h1 className='mb-8'>Pagination with JSON placeholder data</h1>
<Pagination/>
    </>
  )
}

export default Page
