import React from 'react'
import { getWPContent } from '@/wordpressCMS/wordpressContent'
import { getContent } from '../../../sanity/sanit-utils'
import { PortableText } from '@portabletext/react'
import { textStyle } from '../components/portableTextStyle'


export default async function About() {
    // const data = await getWPContent("about") 
    // const aboutText = data?.data.aboutContacts.nodes[0].aboutContactContent.about
    const sanityData = await getContent('about')
    console.log(sanityData.title)

    return (
    <div className='grid pb-[120px] bg-mt-night text-white'>
        <h1 className="text-[60px] border-b-solid border-b-[1px] border-white my-[20px] mx-[40px] uppercase font-[100]">About</h1>
        {/* <div className="m-[40px] max-w-[800px] text-[20px]" dangerouslySetInnerHTML={{__html: aboutText}}/> */}
        <div className="m-[40px] max-w-[800px] text-[18px] font-[350]">
            <PortableText value={sanityData.bodyText} components={textStyle}/>
        </div>
    </div>
    )
}

