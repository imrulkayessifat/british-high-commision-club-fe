import React from 'react'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import CheckInHeader from '@/components/check-in/check-in-header'
import TodayCheckIn from '@/components/check-in/today-check-in'

const Page = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-col w-full gap-5 py-5 pr-5'>
        <CheckInHeader />
        <Tabs defaultValue="today-check-in" className="h-full border rounded-md">
          <TabsList className="flex justify-start bg-white gap-3">
            <TabsTrigger className='text-base ' value="today-check-in">Today&apos;s Check-in</TabsTrigger>
            <TabsTrigger className='text-base' value="check-in-details">Check-in Details</TabsTrigger>
            <TabsTrigger className='text-base' value="event-manage">Event Manage</TabsTrigger>
          </TabsList>
          <TabsContent className='px-4 py-4' value="today-check-in">
            <TodayCheckIn />
          </TabsContent>
          <TabsContent className='px-4 py-4' value="check-in-details">
            <div>Check-in Details</div>
          </TabsContent>
          <TabsContent className='px-4 py-4' value="event-manage">
            <div>Event Manage</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Page