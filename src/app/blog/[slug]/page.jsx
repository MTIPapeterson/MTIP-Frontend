import React from 'react'
import { getBlogPost, getContent } from '../../../../sanity/sanit-utils'
import { PortableText } from '@portabletext/react'
import { textStyle } from '../../components/portableTextStyle'
import Link from 'next/link'

export default async function BlogPost({params}) {
    
    const post = await getBlogPost(params.slug)
    const allBlog = await getContent("blogs")
    console.log(post)

  return (
    <div className="flex justify-center w-full">
    <div className="mx-[20px] md:mx-[40px] min-h-[700px] mt-32 max-w-[1400px] w-full">
        <h1 className="text-[28px] md:text-[60px] border-b-solid border-b-[1px] border-black uppercase font-[100]">{post.title}</h1>
        <div className="grid grid-flow-row md:grid-flow-col py-[40px] justify-start">
            <div className="max-w-[800px] text-[18px] font-[350] md:pr-6">
                <PortableText value={post.bodyText} components={textStyle}/>
            </div>
            <div className="flex flex-col bg-mt-blue-light p-4 rounded-lg ml-0 w-full md:w-[300px]">
                <h1 className='text-[20px] font-[500] mb-4'>Recent Blog Post</h1>
                <div className='flex flex-col'>
                {allBlog.slice(0,5).map(b => <Link key={b.pageName} href={`/blog/${b.pageName}`} className='mb-2 hover:text-mt-blue-dark'>{b.title}</Link>)}
                </div>
                <Link href="/blog" className='hover:text-mt-blue-dark font-[600]'>All Blog Post</Link>
            </div>
            
        </div>
    </div>
    </div>
  )
}
