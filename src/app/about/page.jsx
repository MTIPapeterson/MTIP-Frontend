import React from 'react'
import { getContent } from '../../../sanity/sanit-utils'
import { PortableText } from '@portabletext/react'
import { textStyle } from '../components/portableTextStyle'


const PageContent = async() => {
    const data = await getContent('about')

    return (
    <div className='flex justify-center'>
    <div className='grid pb-[120px] bg-white text-black mt-32 mx-[20px] md:mx-[40px] w-full max-w-[1400px] '>
        <h1 className="text-[28px] md:text-[60px] border-b-solid border-b-[1px] border-black uppercase font-[100]">{data.title}</h1>
        <div className='flex md:flex-row flex-col'>
        <div className="my-[40px] max-w-[800px] text-[18px] font-[350]">
            <PortableText value={data.bodyText} components={textStyle}/>
        </div>
        <div className='w-full flex justify-center items-start my-[40px]'>
        <img className='max-w-[200px] m-6 mt-0 rounded-md' src={data.image}/>
        </div>
        
        </div>
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

