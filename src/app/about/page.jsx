'use client'

import React from 'react'
import { getWPContent } from '@/wordpressCMS/wordpressContent'
import { useState, useEffect } from 'react'

export default function About() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [aboutText, setAboutText] = useState(null)
    
    useEffect(() => {
        getWPContent("about", setData) 
    }, []);
  
    useEffect( () => {
        data && setIsLoading(false)
        isLoading ? "..." : setAboutText(data?.data.aboutContacts.nodes[0].aboutContactContent.about)
        console.log(data)
    }, [data])



    const Body = () => {
        return (
            <div className="mx-[40px]" dangerouslySetInnerHTML={{__html: aboutText}}/>
        )
    }

    return (
    <div>
    {isLoading ? "" : <Body/>}
    </div>
    )
}
