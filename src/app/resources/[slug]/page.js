import { getDynamicContent } from "../../../../sanity/sanit-utils"
import { PortableText } from "@portabletext/react"
import {textStyle} from "@/app/components/portableTextStyle"
import ArrowSvg from "@/assets/icons/arrow.svg"
import FileSvg from "@/assets/icons/file.svg"
import { notFound } from 'next/navigation'

export default async function Page({ params }) {

    const data = await getDynamicContent("resources", params.slug)
    if(!data) notFound()

    return(
    <div className="flex justify-center w-full">
    <div className="mx-[20px] md:mx-[40px] min-h-[700px] mt-32 max-w-[1400px] w-full">
        <h1 className="text-[28px] md:text-[60px] border-b-solid border-b-[1px] border-black uppercase font-[100]">{data.title}</h1>
        <div className="grid grid-flow-row md:grid-flow-col py-[40px] justify-start">
            <div className="max-w-[800px] text-[18px] font-[350] md:pr-6">
                <PortableText value={data.bodyText} components={textStyle}/>
            </div>
            {data.files || data.links ? 
            <div className="flex flex-col bg-mt-blue-light p-4 rounded-lg ml-0 h-fit w-full md:max-w-[300px]">
            {data.files ? <div className="mb-6"> {data.files.map( d => <div className="border-[1px] border-black p-2 rounded-md h-min text-center text-[20px] uppercase hover:bg-black hover:text-white cursor-pointer flex hover:fill-white items-center justify-center" key={d.url}><FileSvg className="mr-2"/><a href={d.url} download={d.name}>{d.name}</a></div>)} </div> : ""}
            <div className="flex flex-col">
                <p className="font-[600] text-gray-800 mb-[5px]">Other Resources</p>
                {data.links ? data.links.map(l => <div className="flex items-start hover:text-mt-blue-dark hover:fill-mt-blue-dark pb-2" key={l.url}><a className="font-[50] text-[16px] md:max-w-[250px]" href={l.url}>{l.name}</a><ArrowSvg className="w-[11px] h-[11px] ml-[8px] mt-[5px]"/></div>): ""}
            </div>
            </div>: ""}
            
        </div>
    </div>
    </div>
    )
}