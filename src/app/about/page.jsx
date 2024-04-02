import React from 'react'
import { getWPContent } from '@/wordpressCMS/wordpressContent'

export default async function About() {
    const data = await getWPContent("about") 
    const aboutText = data?.data.aboutContacts.nodes[0].aboutContactContent.about

    return (
    <div className='grid pb-[120px] bg-mt-night text-white'>
        <h1 className="text-[60px] border-b-solid border-b-[1px] border-white my-[20px] mx-[40px] uppercase font-[100]">About</h1>
        <div className="m-[40px] max-w-[800px] text-[20px]" dangerouslySetInnerHTML={{__html: aboutText}}/>
    </div>
    )
}
