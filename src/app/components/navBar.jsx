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
                <p className={`hover:cursor-pointer py-4 pl-[40px] text-[32px] md:text-[16px] md:pl-0 md:py-0 ${showResources ? "text-mt-blue-dark": ""}`} >Resources +</p>
                {showResources ? 
                <div className='z-[20] absolute left-[-1rem] flex flex-col md:w-[250px]  text-black '>
                <div className='h-[26px] bg-white'></div>
                {data ? <div className='flex flex-col border-solid border-[1px] pl-4 pb-4 bg-white border-gray-200 border-t-0'>{data?.map(page => <Link className="hover:text-mt-blue-dark ml-[40px] md:ml-0 transition duration-150 pt-2" key={page.title} href={`/resources/${page.pageName}`} onClick={()=> setShowResources(false)}>{page.title}</Link>)} </div> : ""}
                </div>
                : ""}
            </div>
        )
    }
    
    const NavWide = () => {
        return ( 
        <>
        <Link href="/" className='pr-[15px] font-[600] text-[32px]'>MTIP</Link>
        <div className='hidden space-x-[15px] justify-self-center text-[16px] uppercase md:flex'>
            <Link className='pr-4 border-r-solid border-r-[1px] border-r-gray-200 hover:text-mt-blue-dark transition duration-150' href="/about">About</Link>
            <Link  className='pr-4 border-r-solid border-r-[1px] border-r-gray-200  hover:text-mt-blue-dark transition duration-150' href="/events">Events</Link>
            <div className='flex space-x-[15px] border-r-solid border-r-[1px] border-r-gray-200 pr-4 transition duration-150'>
                <Dropdown data={resources}/>
            </div>
            <Link  className='pr-4 hover:text-mt-yellow-dark transition duration-150' href="/guides">Guides</Link>
        </div> 
        <Link  className='hidden md:flex justify-self-end px-6 py-2 rounded-[7px] bg-mt-blue-dark text-mt-blue-light uppercase hover:bg-mt-blue-light hover:text-mt-blue-dark transition duration-150' href="/contact">Contact us</Link>
        </>  
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
            <Link onClick={() => {setShowMenu(false)} } className='py-4 pl-[40px] text-[32px] border-b-solid border-b-[1px] border-b-black hover:underline hover:text-mt-blue-dark' href="/about">About</Link>
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
        <div className='bg-white border-b-solid border-b-gray-200 border-b-[1px] fixed w-full z-[100]'>
            <div className='grid grid-flow-col h-[60px] mx-[40px] my-2 items-center'>
                <NavWide/>
                <NavNarrow/>
            </div>
        </div>
        
  )
}
