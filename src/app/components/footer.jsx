import React from 'react'
import Link from 'next/link'
import { getContent } from '../../../sanity/sanit-utils'

export default async function Footer() {

  const settings = await getContent("settings")
  const resources = await getContent("resources")
  const guides = await getContent("learningResources")
  
  return (
    <div className='bg-black text-white border-t-gray-800 border-t flex justify-center'>
      <div className='w-full max-w-[1400px] md:mx-10 mx-5'>
        <div className='grid grid-flow-row text-start md:text-left md:grid-flow-col'>
                <div className='mt-4 flex flex-col border-gray-800 md:border-t-0 md:border-l py-[20px] md:py-0 md:px-[20px]'>
                  <Link href="/about" className='uppercase hover:text-mt-blue-dark'>about</Link>
                  <Link href="/events" className='uppercase hover:text-mt-blue-dark'>events</Link>
                  <Link href="/blog" className='uppercase hover:text-mt-blue-dark'>Blog</Link>
                  <p className='uppercase'>resources+</p>
                  <div className='flex flex-col max-w-[200px] ml-4 my-2'>
                    {resources.map(r => <Link href={`${r.pageName}`} className='hover:text-mt-blue-dark pb-2' key={r.pageName}>{r.title}</Link>)}
                  </div>
                  <p className='uppercase'>guides+</p>
                  <div className='flex flex-col max-w-[200px] ml-4 my-2'>
                    <Link href="/guides" className='hover:text-mt-blue-dark pb-2'>Detailed Guides</Link>
                    {guides.map(r => <Link href={`${r.pageName}`} className='hover:text-mt-blue-dark pb-2' key={r.pageName}>{r.title}</Link>)}
                    
                  </div>
                  
                </div>
                <div className='mt-4 flex flex-col border-gray-800 border-t md:border-t-0 md:border-l font-[200] py-[20px] md:py-0 md:px-[20px]'>
                  <p className='font-[200]'><span className='font-[800]'>{settings.director}</span>, Program Director</p>
                  <p className='font-[200] pb-4'>Montana Innovation Partnership powered by TechLink</p>
                  <p>{settings.email}</p>
                  <p className='pb-4'>{settings.phoneNumber}</p>
                  <p>{settings.building}</p>
                  <p>{settings.address}</p>
                  <p>{settings.poBox}</p>
                  <p>{settings.cityStateZip}</p>
                  
                </div>
                <div className='mt-4 flex flex-col py-[20px] md:py-0 md:px-[20px] border-gray-800 border-t md:border-t-0 md:border-l'>
                  {settings.socialMediaLinks.map(l => <a className="hover:text-mt-yellow-dark" href={l.url} key={l.url}>{l.name}</a>)}
                </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 mb-[20px] mt-[80px] border-gray-800 border-t md:border-t-0 md:border-l py-[20px] md:py-0 md:px-[20px]'>
        <div className='w-full flex flex-col'>
          <p className='max-w-[600px] text-[12px] font-[100]'>{settings.privacyPolicy}</p>
          <p className='font-[400] mt-[10px] text-[14px] '>© Montana Innovation Partnership</p>
        </div>
        <div className='flex w-full items-end justify-start md:justify-end md:mt-0 mt-4'>
          {settings.partnerLinks.map( p => <a href={p.url} key={p.url} ><img className='h-[50px] object-contain border-l border-l-gray-800 px-[10px]' src={p.logo} /></a>)}
        </div>
        </div>
        </div>
    </div>
  )
}
