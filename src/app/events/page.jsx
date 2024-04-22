import React from 'react'
import ArrowSVG from "@/assets/icons/arrow.svg"
import { getContent } from '../../../sanity/sanit-utils'

export default async function Events() {
  const sanityData = await getContent("events")

  const EventList = () => {
    return(
      sanityData.map((e) => {
        return(
          <div className='max-w-[900px] grid md:grid-cols-5 bg-mt-blue-light rounded-md mb-[20px]' key={e.title} >
            <h1 className='ml-4 mr-4 md:mr-0 pt-4 mb-2 uppercase text-[24px] md:text-[32px] row-span-1 col-span-3 border-b-mt-blue-dark border-b-[1px] text-center md:text-left'>{e.title}</h1>
            <h1 className='mr-4 ml-4 md:ml-0 mb-2 pt-4 uppercase self-end text-[24px] text-mt-blue-dark row-span-1 col-span-2 text-center md:text-right border-b-mt-blue-dark md:border-b-[1px]'>{e.date}</h1>
            <div className='p-4 pb-2 col-span-2 row-span-2 grid items-center justify-center'>
              <img className="rounded-md" src={e.image}/>
              <a className="flex items-center text-[18px] py-2 fill-white uppercase hover:bg-white justify-center hover:text-mt-blue-dark hover:fill-mt-blue-dark text-white bg-mt-blue-dark rounded-lg my-2 transition duration-150" href={e.link}>Learn More <ArrowSVG className="pl-2"/></a>
            </div>
            <p className='p-4 mt-2 m-4 text-[16px] font-[350] col-span-3 row-span-2 bg-white rounded-md'>{e.description}</p>
            
          </div>
        )
      })
    )
  }

  return (
    <div className='flex justify-center w-full'>
    <div className='min-h-screen mx-[20px] md:mx-[40px] mt-32 w-full max-w-[1400px]'>
      <h1 className="text-[28px] md:text-[60px] border-b-solid border-b-[1px] border-black uppercase font-[100] mb-[40px]">Upcoming events</h1>
      {sanityData ? <div className='flex flex-col mb-[40px]'><EventList/></div> : <p className='text-[20px] uppercase text-mt-blue-dark'>No upcoming events</p>}
    </div>
    </div>
  )
}
