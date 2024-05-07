import React from 'react'
import { getBlogPost, getContent, getLearningResource } from '../../../../sanity/sanit-utils'
import Link from 'next/link'
import StepCar from './stepCar'
import Image from 'next/image'
import { notFound } from 'next/navigation'


export default async function LearningResource({params}) {
    
    const resource = await getLearningResource(params.slug)
    if(!resource) notFound()
  
  return (
    <div className="flex justify-center w-full relative">
    
      <div className="mx-[20px] md:mx-[40px] min-h-[700px] mt-32 max-w-[1400px] w-full bg-topoMap relative z-10">
        <h1 className="text-[28px] md:text-[60px] border-b-solid border-b-[1px] border-black uppercase font-[100] bg-white">{resource.title}</h1>
        <StepCar steps={resource.steps}/>
          
      </div>  
    </div>
  )
}
