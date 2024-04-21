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
    <div>
        <h1 className="text-[60px] border-b-solid border-b-[1px] border-black my-[20px] mx-[40px] uppercase font-[100] mt-[76px]">Guides</h1>
        <DocsTable guides={guides}/>
    </div>
    )
}
