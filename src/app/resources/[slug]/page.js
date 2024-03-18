"use client"
import { useState, useEffect } from "react"
import { getWPContent } from "@/wordpressCMS/wordpressContent"

export default function Page({ params }) {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [title, setTitle] = useState(null)
    const [pageContent, setPageContent] = useState(null)
    
    useEffect(() => {
        getWPContent("resourcePage", setData) 
    }, []);
  
    useEffect( () => {
        data && setIsLoading(false)
        if(data){
            console.log(data)
            data?.data.resourcePages.nodes.forEach(page => {

               if(page.resourcePageContent.pageName === params.slug){
                setPageContent(page.resourcePageContent)
                setTitle(page.title)
            
            }
               console.log(page.resourcePageContent.pageName, params.slug, page.resourcePageContent.pageName === params.slug)
            });
        }
    }, [data])



    const Body = () => {
        return (
            <div className="mx-[40px]">
                <div>
                    <h1 className="text-[40px] border-b-solid border-b-[1px] border-black my-[20px]">{title}</h1>
                </div>
                <div className="max-w-[800px]" dangerouslySetInnerHTML={{__html: pageContent?.content}}/> 
            </div>
        )
    }

    return (
    <div>
    {isLoading ? "" : <Body/>}
    </div>
    )
}