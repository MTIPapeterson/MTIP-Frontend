
import React from 'react'
import { getWPContent } from '@/wordpressCMS/wordpressContent'

export default async function Contact() {
    
    const data = await getWPContent("about") 
    const address  = data?.data.aboutContacts.nodes[0].aboutContactContent.adress
    const email  = data?.data.aboutContacts.nodes[0].aboutContactContent.email
    const phone  = data?.data.aboutContacts.nodes[0].aboutContactContent.phone
    const director = data?.data.aboutContacts.nodes[0].aboutContactContent.programDirector

    return (
    <div className='flex flex-col'>
        <h1 className="text-[60px] border-b-solid border-b-[1px] border-black my-[20px] mx-[40px] uppercase font-[100]">Contact</h1>
       <div className='grid md:grid-cols-5 grid-cols-1 h-[500px]'>
       <div className='col-span-1'>
            <h1 className='ml-[40px] text-[18px] font-[600]'>{director}</h1> 
            <p className='ml-[40px] mb-[20px]'>Program Director</p>
            <p className="ml-[40px] max-w-[800px] text-[18px]">{email}</p>
            <p className="ml-[40px] max-w-[800px] text-[18px] mb-[40px]">{phone}</p>
        </div>
        <div className="mx-[40px] max-w-[800px] text-[18px] col-span-1" dangerouslySetInnerHTML={{__html: address}}/>

       </div>
        
    </div>
    )
}
