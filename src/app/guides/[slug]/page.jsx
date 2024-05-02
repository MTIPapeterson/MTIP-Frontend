import React from 'react'
import { getBlogPost, getContent, getLearningResource } from '../../../../sanity/sanit-utils'
import { PortableText } from '@portabletext/react'
import { textStyle } from '../../components/portableTextStyle'
import Link from 'next/link'

export default async function LearningResource({params}) {
    
    const resource = await getLearningResource(params.slug)

  return (
    <div className="flex justify-center w-full">
    <div className="mx-[20px] md:mx-[40px] min-h-[700px] mt-32 max-w-[1400px] w-full">
        <h1 className="text-[28px] md:text-[60px] border-b-solid border-b-[1px] border-black uppercase font-[100]">{resource.title}</h1>
    </div>
    </div>
  )
}
