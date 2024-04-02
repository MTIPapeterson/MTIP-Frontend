import React from 'react'
import { getWPContent } from '@/wordpressCMS/wordpressContent'
import ArrowSVG from "@/assets/icons/arrow.svg"

export default async function Events() {
  const data = await getWPContent("events")
  const events = data?.data.events.nodes
  
  const EventList = ({events}) => {
    return(
      events.map((e) => {
        return(
          <div className='max-w-[800px] grid grid-cols-5 gird-rows-3 border-black border-[1px]' key={e.eventContent.eventName} >
            <h1 className='border-b-black border-b-[1px] p-4 uppercase text-[24px] row-span-1 col-span-4'>{e.eventContent.eventName}</h1>
            <h1 className='border-l-black border-l-[1px] border-b-black border-b-[1px] p-4 uppercase text-[24px] text-mt-blue-dark row-span-1 col-span-1 text-center'>{e.eventContent.date}</h1>
            <p className='p-4 text-[18px] col-span-3 row-span-2'>{e.eventContent.description}</p>
            <div className='p-4 col-span-2 row-span-2 border-l-black border-l-[1px] grid items-center justify-center'>
              <img className=""src={e.eventContent.image.node.mediaItemUrl}/>
              <a className="flex items-center text-[24px] uppercase hover:text-mt-blue-dark hover:fill-mt-blue-dark" href={e.eventContent.link}>Learn More <ArrowSVG className="pl-2"/></a>
            </div>
          </div>
        )
      })
    )
  }

  return (
    <div className='h-screen ml-[40px] mt-[20px]'>
      {events.length == 0 ? <p className='text-[20px] uppercase text-mt-blue-dark'>No upcoming events</p>: <EventList events={events}/>}
    </div>
  )
}
