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
      <div className={`col-span-1 md:flex md:left-0 md:relative flex-col ${showSidebar ? "absolute left-[40px] border-r-[1px] border-r-black bg-white": "hidden"}`}>
        {documentKeys.map((e)=><div className={`p-4 border-solid border-r-0 border-black border-[1px] ${e == currDoc? "bg-black text-white": ""}`} key={e} onClick={()=>{handleClick(e)} }><h1>{e}</h1></div>)}
      </div>
    )
  }

  return (
    <div className='m-[40px] grid grid-cols-5'>
      <SideBar documentKeys={Object.keys(documents)}/>
      <div className="p-[40px] col-span-5 md:col-span-4 h-[600px] overflow-y-scroll border-solid border-black border-[1px] flex justify-center">
      <div className="max-w-[700px] w-full pb-[40px]" dangerouslySetInnerHTML={{__html: documents[currDoc]?.contentDescription}}/>
      </div>
    </div>
  )
}
