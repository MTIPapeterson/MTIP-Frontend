import React from 'react'
import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'
import client from '../../../sanity/lib/client'


const imageComponent = ({value, isInline}) => {
    const {width, height} = getImageDimensions(value)
    const url = urlBuilder(client).image(value.asset._ref).url()
  
    return (
      <img
        src={url}
        alt={value.alt || ' '}
        loading="lazy"
        className='py-4 w-fill max-h-[500px]'
        style={{
          aspectRatio: width / height,
        }}
      />
    )
}

const textStyle = {
    types: {
      image: imageComponent,
    },
    marks: {
        em: ({children}) => <em className="font-satoshiItalic">{children}</em>,
        link: ({value, children}) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
            return (
              <a className='underline hover:text-mt-blue-dark' href={value?.href} target={target} rel={target === '_blank' && 'noindex nofollow'}>
                {children}
              </a>
            )},
        strong: ({children}) => <b className='font-[800]'>{children}</b>,
        underline: ({children}) => <u className='underline'>{children}</u>,
        strikeThrough: ({children}) => <s className='line-through'>{children}</s>
    },
    block: {
        h1: ({children}) => <h1 className="text-[40px]">{children}</h1>,
        h2: ({children}) => <h2 className="text-[36px]">{children}</h2>,
        h3: ({children}) => <h3 className="text-[32px]">{children}</h3>,
        h4: ({children}) => <h4 className="text-[26px]">{children}</h4>,
        h5: ({children}) => <h5 className="text-[22px]">{children}</h5>,
        h6: ({children}) => <h6 className="text-[20px]">{children}</h6>,
        blockquote: ({children}) => <blockquote className="text-[18px] font-[200] text-gray-400">{children}</blockquote>,
        normal: ({children}) => <p className="mb-[20px]">{children}</p>,        
    },
    list: {
      bullet: ({children}) => <ul className="list-disc ml-4 leading-8">{children}</ul>,
      number: ({children}) => <ol className="list-decimal ml-[20px] leading-8">{children}</ol>,
    },  
}


export {textStyle}