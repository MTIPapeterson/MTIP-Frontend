import React from 'react'
import { getWPContent } from '@/wordpressCMS/wordpressContent'
import DocsTable from './DocTable'

export default async function Docs() {
    const data = await getWPContent("docs") 
    const documentsData = data?.data.documentResources.nodes
    
    function reduce(prev, curr){
        return {...prev, [curr.doccontent.name]: curr.doccontent}
    }
    const documents = documentsData.reduce(reduce, {})

    return (
    <div>
        <h1 className="text-[60px] border-b-solid border-b-[1px] border-black my-[20px] mx-[40px] uppercase font-[100]">Guides</h1>
        <DocsTable documents={documents}/>
    </div>
    )
}
