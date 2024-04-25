"use client"

import React from 'react'
import {useState} from 'react'
import Link from 'next/link'
import Hamburger from '@/assets/icons/Hamburger.svg'
import Xsvg from '@/assets/icons/x.svg'

export default function NavBar({resources, logo}) {
    const [showResources, setShowResources] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    

    const Dropdown = ({data}) => {
        return (
            <div className='relative' onMouseOver={()=> setShowResources(true)} onMouseOut={() => setShowResources(false)}>
                <p className={`hover:cursor-pointer py-4 pl-[20px] text-[24px] md:text-[16px] md:pl-0 md:py-0 ${showResources ? "text-mt-blue-dark": ""}`} >Resources +</p>
                {showResources ? 
                <div className='z-[20] absolute left-[-1rem] flex flex-col w-screen md:w-[250px] text-white'>
                <div className='md:h-[26px] bg-black'></div>
                {data ? <div className='flex flex-col border-solid border-[1px] pl-4 pb-4 bg-black border-gray-800 border-t-0'>{data?.map(page => <Link className="hover:text-mt-blue-dark ml-[20px] md:ml-0 transition duration-150 pt-2" key={page.title} href={`/resources/${page.pageName}`} onClick={()=> setShowResources(false)}>{page.title}</Link>)} </div> : ""}
                </div>
                : ""}
            </div>
        )
    }
    
    const NavWide = () => {
        return ( 
        <div className='hidden md:grid grid-flow-col h-[60px] my-2 items-center text-white w-full'>
        <Link href="/" className='pr-[15px] font-[600] text-[32px] w-full'><img className='h-[40px]' src={logo} alt="MTIP LOGO"/></Link>
        <div className='hidden space-x-[15px] justify-self-center text-[16px] uppercase md:flex'>
            <Link className='pr-4 border-r-solid border-r-[1px] border-r-gray-800 hover:text-mt-blue-dark transition duration-150' href="/about">About</Link>
            <Link  className='pr-4 border-r-solid border-r-[1px] border-r-gray-800  hover:text-mt-blue-dark transition duration-150' href="/events">Events</Link>
            <div className='flex space-x-[15px] border-r-solid border-r-[1px] border-r-gray-800 pr-4 transition duration-150'>
                <Dropdown data={resources}/>
            </div>
            <Link  className='pr-4 hover:text-mt-yellow-dark transition duration-150 border-r border-r-gray-800' href="/guides">Guides</Link>
            <Link  className='pr-4 hover:text-mt-yellow-dark transition duration-150 ' href="/blog">Blog</Link>
        </div> 
        <Link  className='hidden md:flex justify-self-end px-6 py-2 rounded-[7px] bg-mt-blue-dark text-mt-blue-light uppercase hover:bg-mt-blue-light hover:text-mt-blue-dark transition duration-150' href="/contact">Contact us</Link>
        </div>  
        )
   }

   const NavNarrow = () => {
    return ( 
    <div className='text-white text-[16px] uppercase md:hidden items-center flex h-[60px] my-2 w-full'>
        <Link href="/" className='pr-[15px] font-[600] text-[32px] w-full'><img className='h-[40px]' src={logo} alt="MTIP LOGO"/></Link>
        <div className='justify-end w-full flex items-center'>
        <Link  className='mr-[5px] justify-self-end px-4 rounded-[7px] h-fit py-[4px] bg-mt-blue-dark text-mt-blue-light uppercase hover:bg-mt-blue-light hover:text-mt-blue-dark transition duration-150' href="/contact">Contact us</Link>
        <button className='text-[40px] w-[40px] text-center hover:text-mt-blue-dark' onClick={() => {setShowMenu(!showMenu)} }>{showMenu ? "–": "="}</button>
        </div>
        { showMenu ? 
            <div className='w-full border-b-solid border-b-black border-b-[1px] z-10 position absolute top-[77px] left-0 flex flex-col bg-black'>
            <Link onClick={() => {setShowMenu(false)} } className='py-4 pl-[20px] text-[24px] border-b-solid border-b-[1px] border-b-gray-800 hover:underline hover:text-mt-blue-dark' href="/about">About</Link>
            <Link onClick={() => {setShowMenu(false)} }  className='py-4 pl-[20px] text-[24px] border-b-solid border-b-[1px] border-b-gray-800 hover:underline hover:text-mt-blue-dark' href="/contact">Contact</Link>
            <Link onClick={() => {setShowMenu(false)} } className='py-4 pl-[20px] text-[24px] border-b-solid border-b-[1px] border-b-gray-800 hover:underline hover:text-mt-blue-dark' href="/events">Events</Link>
            <Link onClick={() => {setShowMenu(false)} } className='py-4 pl-[20px] text-[24px] border-b-solid border-b-[1px] border-b-gray-800 hover:underline hover:text-mt-yellow-dark' href="/guides">Guides</Link>
            <Link onClick={() => {setShowMenu(false)} } className='py-4 pl-[20px] text-[24px] border-b-solid border-b-[1px] border-b-gray-800 hover:underline hover:text-mt-yellow-dark' href="/blog">Blog</Link>
            <div className='flex w-full border-b-[1px] border-b-gray-800'>
                <Dropdown data={resources}/>
            </div>
            </div> : ""
            }
    </div>   
    )
}

    return (
        <div className='bg-black fixed w-full z-[100] border-gray-800 border-b-[1px] flex justify-center'>
            <div className='max-w-[1400px] w-full mx-[20px] md:mx-[40px]'>
                <NavWide/>
                <NavNarrow/>
            </div>
        </div>
        
  )
}
