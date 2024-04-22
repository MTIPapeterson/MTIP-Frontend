
import React from 'react'
import { getWPContent } from '@/wordpressCMS/wordpressContent'

export default async function Contact() {
    
    const data = await getWPContent("about") 
    const address  = data?.data.aboutContacts.nodes[0].aboutContactContent.adress
    const email  = data?.data.aboutContacts.nodes[0].aboutContactContent.email
    const phone  = data?.data.aboutContacts.nodes[0].aboutContactContent.phone
    const director = data?.data.aboutContacts.nodes[0].aboutContactContent.programDirector

    return (
    <div className='flex justify-center'>
    <div className='flex flex-col max-w-[1400px] mt-32 w-full mx-[20px] md:mx-[40px]'>
        <h1 className="text-[28px] md:text-[60px] border-b-solid border-b-[1px] border-black uppercase font-[100] mb-[40px]">Contact</h1>
       <div className='grid md:grid-cols-5 grid-cols-1 h-[500px]'>
       <div className='col-span-2'>
            <h1 className='text-[18px] font-[600]'>{director}</h1> 
            <p className='mb-[20px]'>Program Director</p>
            <p className="max-w-[800px] text-[18px]">{email}</p>
            <p className="max-w-[800px] text-[18px] mb-[40px]">{phone}</p>
        </div>
        <div className="max-w-[800px] text-[18px] col-span-2" dangerouslySetInnerHTML={{__html: address}}/>

       </div>
        
    </div>
    </div>
    )
}
