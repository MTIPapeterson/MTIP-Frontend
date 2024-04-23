
import React from 'react'

import { getContent } from '../../../sanity/sanit-utils'

export default async function Contact() {
    
    const sanityData = await getContent("settings") 

    return (
    <div className='flex justify-center'>
    <div className='flex flex-col max-w-[1400px] mt-32 w-full mx-[20px] md:mx-[40px]'>
        <h1 className="text-[28px] md:text-[60px] border-b-solid border-b-[1px] border-black uppercase font-[100] mb-[40px]">Contact</h1>
       <div className='grid md:grid-cols-5 grid-cols-1 h-[500px]'>
       <div className='col-span-2'>
            <h1 className='text-[18px] font-[600]'>{sanityData.director}</h1> 
            <p className='mb-[20px]'>Program Director</p>
            <p className="max-w-[800px] text-[18px]">{sanityData.email}</p>
            <p className="max-w-[800px] text-[18px] mb-[40px]">{sanityData.phoneNumber}</p>
        </div>
        <div>
        <p className="max-w-[800px] text-[18px]">{sanityData.building}</p>
        <p className="max-w-[800px] text-[18px]">{sanityData.address}</p>
        <p className="max-w-[800px] text-[18px]">{sanityData.poBox}</p>
        <p className="max-w-[800px] text-[18px]">{sanityData.cityStateZip}</p>
        </div>
       </div>
        
    </div>
    </div>
    )
}
