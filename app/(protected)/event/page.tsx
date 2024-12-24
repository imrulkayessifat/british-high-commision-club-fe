import React from 'react'

import EventAccordion from '@/components/event/event-accordion'
import EventHeader from '@/components/event/event-header'

const Page = () => {
  return (
    <div className='mt-2 mr-3'>
      <div className='flex flex-col w-full border border-neutral-300 rounded-[6px]'>
        <EventHeader />
        <div className='my-6 mx-8'>
          <EventAccordion name='Current Events' open={true} />
        </div>
        <div className='my-6 mx-8'>
          <EventAccordion name='Past Events' open={false} />
        </div>
      </div>
    </div>
  )
}

export default Page