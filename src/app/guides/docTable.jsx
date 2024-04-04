"use client"
import React, { useEffect, useState } from 'react'

export default function DocsTable({documents}) {
  const [currDoc, setCurrDoc] = useState(Object.keys(documents)[0])
  const [showSidebar, setShowSidebar] = useState(false)


  const handleClick = (e) => {
    setCurrDoc(e)
    setShowSidebar(false)
  }

  const SideBar = ({documentKeys}) =>{
    return(
      <>
      <h1 className='md:hidden flex col-span-4 items-center text-[20px] text-mt-blue-dark m-[20px]'>{currDoc}</h1>
      <button onClick={() => {setShowSidebar(!showSidebar)}} className='flex md:hidden text-[32px] self-center justify-self-end text-black hover:text-mt-blue-dark col-span-1 mr-[20px]'>{showSidebar? '-' :'+' }</button>
      <div className={`md:col-span-1 col-span-5 md:flex md:left-0 md:relative md:flex-col mb-[20px] md:mb-0 ${showSidebar ? "" : "hidden"}`}>
        {documentKeys.map((e)=><div className={`p-4 border-b-solid border-mt-blue-dark border-b-[1px] mx-[10px] md:mx-0 ${e == currDoc? "text-mt-blue-dark": ""} hover:cursor-pointer`} key={e} onClick={()=>{handleClick(e)} }><h1>{e}</h1></div>)}
      </div>
      </>
    )
  }

  return (
    <div className='m-[20px] md:m-[40px] grid grid-cols-5 bg-mt-blue-light p-0 md:p-[25px] rounded-[10px]'>
      <SideBar documentKeys={Object.keys(documents)}/>
      <div className="p-[20px] col-span-5 md:col-span-4 md:ml-[20px] rounded-0 border-[2px] border-mt-blue-light md:rounded-[10px] h-[600px] overflow-y-scroll flex justify-center bg-white">
      <div className="max-w-[700px] w-full pb-[40px]" dangerouslySetInnerHTML={{__html: documents[currDoc]?.contentDescription}}/>
      </div>
    </div>
  )
}
