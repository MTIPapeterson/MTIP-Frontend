import { getWPContent } from "@/wordpressCMS/wordpressContent"

export default async function Page({ params }) {

    const data = await getWPContent("resourcePage")
    let pageContent
    let title
    
    data?.data.resourcePages.nodes.forEach(page => {
        if(page.resourcePageContent.pageName === params.slug) {
            pageContent = page.resourcePageContent
            title = page.title}
        }
    )

    if(!title){
        return(<h1 className="mx-[40px] text-[60px] border-b-solid border-b-[1px] border-black my-[20px] uppercase font-[100]">Page Not Found</h1>)
    }

    return(
    <div className="px-[40px] bg-mt-night text-white">
        <h1 className="text-[60px] border-b-solid border-b-[1px] border-white py-[20px] uppercase font-[100]">{title}</h1>
        <div className="grid grid-flow-col py-[40px]">
            <div className="max-w-[800px] text-[18px]" dangerouslySetInnerHTML={{__html: pageContent?.content}}/>
            {pageContent?.file ? <a className="border-[1px] border-white p-4 h-min text-center text-[24px] mx-4 uppercase hover:bg-white hover:text-black cursor-pointer" href={pageContent.file.node.mediaItemUrl} download={pageContent.file.node.title}>{pageContent?.file.node.title}</a> :""}
        </div>
         

    </div>
    )
}