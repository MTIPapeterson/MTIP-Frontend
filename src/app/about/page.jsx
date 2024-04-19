import React from 'react'
import { getWPContent } from '@/wordpressCMS/wordpressContent'
import { getContent } from '../../../sanity/sanit-utils'
import { PortableText } from '@portabletext/react'
import { textStyle } from '../components/portableTextStyle'


const PageContent = async() => {
    const data = await getContent('about')

    return (
    <div className='grid pb-[120px] bg-white text-black'>
        <h1 className="text-[60px] border-b-solid border-b-[1px] border-black my-[20px] mx-[40px] uppercase font-[100]">{data.title}</h1>
        <div className="m-[40px] max-w-[800px] text-[18px] font-[350]">
            <PortableText value={data.bodyText} components={textStyle}/>
        </div>
    </div>
    )
}

export default function About() {
    
   return(
    <>
    <PageContent/>
    </>
   )
}

