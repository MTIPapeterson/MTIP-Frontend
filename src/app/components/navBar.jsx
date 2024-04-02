"use client"

import React from 'react'
import {useState} from 'react'
import Link from 'next/link'
import Hamburger from '@/assets/icons/Hamburger.svg'
import Xsvg from '@/assets/icons/x.svg'

export default function NavBar({resources}) {
    const [showResources, setShowResources] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    

    const Dropdown = ({data}) => {
        return (
            <div className='relative' onMouseOver={()=> setShowResources(true)} onMouseOut={() => setShowResources(false)}>
                <p className="hover:cursor-pointer py-4 pl-[40px] text-[32px] md:text-[16px] md:pl-0 md:py-0">Resources</p>
                {showResources ? 
                <div className='absolute left-[-1rem] flex flex-col md:w-[210px] bg-white text-black pl-4 py-4 border-solid border-[1px] border-black border-t-0'>
                {data?.data.resourcePages.nodes.map(page => <Link className="hover:underline hover:text-mt-blue-dark ml-[40px] md:ml-0" key={page.title} href={`/resources/${page.resourcePageContent.pageName}`}>{page.title}</Link>) }
                </div>
                : ""}
            </div>
        )
    }
    
    const NavWide = () => {
        return ( 
        <div className='hidden space-x-[15px] justify-self-end text-[16px] uppercase md:flex'>
            <Link className='pr-4 border-r-solid border-r-[1px] border-r-black hover:underline hover:text-mt-blue-dark' href="/about">About</Link>
            <Link  className='pr-4 border-r-solid border-r-[1px] border-r-black hover:underline hover:text-mt-blue-dark' href="/contact">Contact</Link>
            <Link  className='pr-4 border-r-solid border-r-[1px] border-r-black hover:underline hover:text-mt-blue-dark' href="/events">Events</Link>
            <div className='flex space-x-[15px] border-r-solid border-r-[1px] border-r-black pr-4'>
                <Dropdown data={resources}/>
            </div>
            <Link  className='pr-4 hover:underline hover:text-mt-yellow-dark' href="/guides">Guides</Link>
        </div>   
        )
   }

   const NavNarrow = () => {
    return ( 
    <div className='flex justify-self-end text-[16px] uppercase md:hidden z-[20]'>
        <button onClick={() => {setShowMenu(true)} }><Hamburger className="h-[40px] w-[30px]"/></button>
        { showMenu ? 
            <div className='w-full border-b-solid border-b-black border-b-[1px] z-10 position absolute top-0 left-0 flex flex-col bg-white'>
            <div className='grid bg-white border-b-solid border-b-black border-b-[1px] grid-flow-col items-center'>
                <Link href="/" className='mx-[40px] font-[600] my-[16px] text-[32px]'>MTIP</Link>
                <button className='justify-self-end mx-[40px] my-[16px]' onClick={() => {setShowMenu(false)} }><Xsvg className="h-[40px] w-[30px]"/></button>
            </div>
            <Link  onClick={() => {setShowMenu(false)} } className='py-4 pl-[40px] text-[32px] border-b-solid border-b-[1px] border-b-black hover:underline hover:text-mt-blue-dark' href="/about">About</Link>
            <Link onClick={() => {setShowMenu(false)} }  className='py-4 pl-[40px] text-[32px] border-b-solid border-b-[1px] border-b-black hover:underline hover:text-mt-blue-dark' href="/contact">Contact</Link>
            <Link onClick={() => {setShowMenu(false)} } className='py-4 pl-[40px] text-[32px] border-b-solid border-b-[1px] border-b-black hover:underline hover:text-mt-blue-dark' href="/events">Events</Link>
            <Link onClick={() => {setShowMenu(false)} } className='py-4 pl-[40px] text-[32px] border-b-solid border-b-[1px] border-b-black hover:underline hover:text-mt-yellow-dark' href="/guides">Guides</Link>
            <div className='flex space-x-[15px]'>
                <Dropdown data={resources}/>
            </div>
            </div> : ""
            }
    </div>   
    )
}

    return (
        <div className='bg-white border-b-solid border-b-black border-b-[1px]'>
            <div className='grid grid-flow-col h-[60px] mx-[40px] my-[10px] items-center'>
                <Link href="/" className='pr-[15px] font-[600] text-[32px]'>MTIP</Link>
                <NavWide/>
                <NavNarrow/>
            </div>
        </div>
        
  )
}
