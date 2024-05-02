import React from 'react'
import { getContent } from '../../../sanity/sanit-utils'
import Link from 'next/link'
import blocksToText from '../components/blocksToText'
import { formatDate } from '../../../sanity/sanit-utils'

export default async function Blog() {
    const blogPost = await getContent('blogs')
  return (
    <div className='flex justify-center'>
        <div className='pb-[120px] bg-white text-black mt-32 mx-[20px] md:mx-[40px] w-full max-w-[1400px] flex flex-col min-h-[700px]'>
            <h1 className='text-[28px] md:text-[60px] border-b-solid border-b-[1px] border-black uppercase font-[100] mb-10'>Recent Blog Post</h1>
            {blogPost.map(b => 
            <Link key={b.title} className="w-full flex-col md:flex-row flex border-t border-gray-200 hover:border-mt-blue-dark hover:bg-mt-blue-light p-4 md:pl-4 px-4 pl-0 pb-10" href={`blog/${b.pageName}`}>
                <img src={b.image} className='md:w-[300px] md:h-[300px] w-full rounded-md object-cover bg-black' ></img>
                <div className='flex flex-col md:ml-[40px]'>
                <p className='text-gray-500 pb-2 md:pt-0 pt-4'>{formatDate(b.publishDate)}</p>
                <h1 className='text-[26px] md:text-[32px] font-[500] max-w-[900px]'>{b.title}</h1>
                <p className='pb-4 pt-2'>By: <span className='font-[600]'>{b.author}</span></p>
                
                <p className='text-[16px] font-[100] max-w-[750px]'>{blocksToText(b.bodyText).split(' ').slice(0, 75).join(' ')}. . . <span className='text-mt-blue-dark underline'>Read More</span></p>
                </div>
                
            </Link>
        )}
        </div>
    </div>
  )
}
