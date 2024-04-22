import React from 'react'
import DocsTable from './docTable'
import { getContent } from '../../../sanity/sanit-utils'

export default async function Docs() {

    const sanityData = await getContent("guides")
  
    function reduce(prev, curr){
        return {...prev, [curr.title]: curr.bodyText}
    }
    
    const guides = sanityData.reduce(reduce, {})

    return (
    <div className='grid justify-center'>
        <div className='mx-[20px] mb-10 md:mx-[40px] max-w-[1400px]'>
        <h1 className="text-[40px] md:text-[60px] border-b-solid border-b-[1px] border-black my-[40px] uppercase font-[100] mt-32">Guides</h1>
        <DocsTable guides={guides}/>
        </div>
    </div>
    )
}
