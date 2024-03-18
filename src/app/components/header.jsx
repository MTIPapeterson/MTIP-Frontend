"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getWPContent } from '@/wordpressCMS/wordpressContent'


export default function Header() {

   const [data, setData] = useState(null)
   const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getWPContent("resourceLinks", setData)
    }, [])

    useEffect( () => {
        data && setIsLoading(false)
    }, [data])

   
    return (
        <div className='flex mx-[40px] my-[10px]'>
            <Link href="/" className='pr-[15px]'>MTIP</Link>
            <div className='flex space-x-[15px]'>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/events">Events</Link>
                <div className='flex space-x-[15px]'>
                    <p>Resources:</p>
                    {!isLoading && data?.data.resourcePages.nodes.map(page => <Link href={`/resources/${page.resourcePageContent.pageName}`}>{page.resourcePageContent.pageName}</Link>)}
                </div>
            </div>
        </div>
        
  )
}
