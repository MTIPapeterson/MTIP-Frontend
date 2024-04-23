import React from 'react'
import Link from 'next/link'
import { getContent } from '../../../sanity/sanit-utils'

export default async function Footer() {

  const settings = await getContent("settings")
  const resources = await getContent("resources")
  
  return (
    <div className='bg-mt-yellow-light border-t-mt-yellow-dark border-t-solid border-t-[1px] flex justify-center'>
      <div className='w-full max-w-[1400px] mx-[40px]'>
        <div className='grid grid-flow-row text-start md:text-left md:grid-flow-col'>
                <div className='mt-4 flex flex-col border-r-mt-yellow-dark border-r-solid border-r-[1px]'>
                  <Link href="/about" className='uppercase hover:text-mt-blue-dark'>about</Link>
                  <p className='uppercase'>resources+</p>
                  <div className='flex flex-col max-w-[200px] ml-4 my-2'>
                    {resources.map(r => <Link href={`/resources/${r.pageName}`} className='hover:text-mt-blue-dark pb-2' key={r.pageName}>{r.title}</Link>)}
                   
                  </div>
                  
                  <Link href="/events" className='uppercase hover:text-mt-blue-dark'>events</Link>
                  <Link href="/guides" className='uppercase hover:text-mt-blue-dark'>Guides</Link>
                </div>
                <div className='mt-4 flex flex-col border-r-mt-yellow-dark border-r-solid border-r-[1px] px-[40px]'>
                  <p className='font-[200]'>{settings.director}, Program Director</p>
                  <p className='font-[200]'>Montana Innovation Partnership powered by TechLink</p>
                </div>
                <div className='mt-4 flex flex-col border-r-mt-yellow-dark border-r-solid border-r-[1px] px-[40px] font-[200]'>
                  
                  <p>{settings.building}</p>
                  <p>{settings.address}</p>
                  <p>{settings.poBox}</p>
                  <p>{settings.email}</p>
                  <p>{settings.cityStateZip}</p>
                  <p>{settings.phoneNumber}</p>
                </div>
                <div className='mt-4 flex flex-col border-r-mt-yellow-dark border-r-solid px-[40px]'>
                  {settings.socialMediaLinks.map(l => <a className="hover:text-mt-yellow-dark" href={l.url} key={l.url}>{l.name}</a>)}
                </div>
        </div>
        <div className='w-full flex flex-col items-center'>
          <p className='text-center max-w-[600px] text-[14px] font-[200] mb-[20px] mt-[40px] mx-[40px]'>{settings.privacyPolicy}</p>
          <p className='font-[600] mb-[40px]'>Copyright 2024 Montana Innovation Partnership</p>
        </div>
        </div>
    </div>
  )
}
