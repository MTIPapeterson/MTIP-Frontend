import React from 'react'
import Link from 'next/link'
import { getWPContent } from '@/wordpressCMS/wordpressContent'

export default async function Footer() {

  const data = await getWPContent("about") 
  const address  = data?.data.aboutContacts.nodes[0].aboutContactContent.adress
  const email  = data?.data.aboutContacts.nodes[0].aboutContactContent.email
  const phone  = data?.data.aboutContacts.nodes[0].aboutContactContent.phone
  const director = data?.data.aboutContacts.nodes[0].aboutContactContent.programDirector
  
  return (
    <div className='bg-mt-yellow-light border-t-mt-yellow-dark border-t-solid border-t-[1px]'>
        <div className='grid grid-flow-row text-center md:text-left md:grid-flow-col'>
                <div className='mt-4 flex flex-col border-r-mt-yellow-dark border-r-solid border-r-[1px] px-[40px]'>
                  <Link href="/about" className='uppercase hover:text-mt-blue-dark'>about</Link>
                  <Link href="/resources" className='uppercase hover:text-mt-blue-dark'>resources</Link>
                  <Link href="/events" className='uppercase hover:text-mt-blue-dark'>events</Link>
                </div>
                <div className='mt-4 flex flex-col border-r-mt-yellow-dark border-r-solid border-r-[1px] px-[40px]'>
                  <p className='font-[200]'>{director}, Program Director</p>
                  <p className='font-[200]'>Montana Innovation Partnership powered by TechLink</p>
                </div>
                <div className='mt-4 flex flex-col border-r-mt-yellow-dark border-r-solid border-r-[1px] px-[40px] font-[200]'>
                  <div className="" dangerouslySetInnerHTML={{__html: address}}/>
                  <p>{email}</p>
                  <p>{phone}</p>
                </div>
                <div className='mt-4 flex flex-col border-r-mt-yellow-dark border-r-solid px-[40px]'>
                </div>
        </div>
        <div className='w-full flex flex-col items-center'>
          <p className='text-center max-w-[600px] text-[14px] font-[200] mb-[20px] mt-[40px] mx-[40px]'>The Montana Innovation Partnership (MTIP) is based at Montana University TechLink Center. We are funded in part through a cooperative agreement with the U.S. Small Business Adminstration with additional funding from the Montana Department of Commerce</p>
          <p className='font-[600] mb-[40px]'>Copyright 2023 Montana Innovation Partnership</p>
        </div>
    </div>
  )
}
