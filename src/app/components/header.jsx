"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getWPContent } from '@/wordpressCMS/wordpressContent'
import { usePathname } from 'next/navigation'

export default function Header() {

   const pathName = usePathname() 
   const [data, setData] = useState(null)
   const [isLoading, setIsLoading] = useState(true)
   const [showResources, setShowResources] = useState(false)

    useEffect(() => {
        getWPContent("resourceLinks", setData)
    }, [])

    useEffect( () => {
        data && setIsLoading(false)
    }, [data])

    useEffect ( () =>{
        setShowResources(false)
    }, [pathName])

    const handleShowResources = () => {
        setShowResources(!showResources)
    }

    const Resources = () => {
        return (
            <div className=''>
                <p onClick={handleShowResources}>Resources:</p>
                {showResources ? 
                <div className='absolute flex flex-col bg-white text-black px-2 '>
                {data?.data.resourcePages.nodes.map(page => <Link href={`/resources/${page.resourcePageContent.pageName}`}>{page.resourcePageContent.pageName}</Link>) }
                </div>
                : ""}
            </div>
        )
    } 

   
    return (
        <div className='grid grid-flow-col h-[60px] ml-[40px] mr-[120px] my-[10px] items-center bg-white'>
            <Link href="/" className='pr-[15px] font-[600] text-[32px]'>MTIP</Link>
            <div className='flex space-x-[15px] justify-self-end text-[16px] uppercase'>
                <Link className='pr-4 border-r-solid border-r-[1px] border-r-black' href="/about">About</Link>
                <Link  className='pr-4 border-r-solid border-r-[1px] border-r-black' href="/contact">Contact</Link>
                <Link  className='pr-4 border-r-solid border-r-[1px] border-r-black' href="/events">Events</Link>
                <div className='flex space-x-[15px]'>
                  {isLoading ? "..." : <Resources/>}
                </div>
            </div>
        </div>
        
  )
}
