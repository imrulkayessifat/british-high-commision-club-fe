/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

import MemberAction from '@/components/member/member-action';
import MemberList from '@/components/member/member-list';
import MemberHeader from '@/components/member/member-header';

const Page = () => {

  return (
    <div className='flex flex-col gap-7 w-full h-full'>
      <img
        src='/member.png'
        alt='Member'
        className='w-full object-cover max-h-[200px]'
      />
      <div className='px-5'>
        <MemberHeader />
      </div>
      <MemberAction />
      <MemberList />
    </div>
  )
}

export default Page