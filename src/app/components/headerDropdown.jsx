"use client"

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

export default function HeaderDropdown({data}) {
    const [showResources, setShowResources] = useState(false)

    return (
        <div className='relative' onMouseOver={()=> setShowResources(true)} onMouseOut={() => setShowResources(false)}>
            <p className="hover:cursor-pointer">Resources</p>
            {showResources ? 
            <div className='absolute left-[-1rem] flex flex-col w-[210px] bg-white text-black pl-4 py-4 border-solid border-[1px] border-black border-t-0'>
            {data?.data.resourcePages.nodes.map(page => <Link className="hover:underline hover:text-mt-blue-dark" href={`/resources/${page.resourcePageContent.pageName}`}>{page.title}</Link>) }
            </div>
            : ""}
        </div>
    )
}
