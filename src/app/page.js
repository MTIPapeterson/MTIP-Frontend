import Link from "next/link";
import ArrowSVG from "@/assets/icons/arrow.svg"
import { getWPContent } from "@/wordpressCMS/wordpressContent";
import NewsLetter from "./components/newletter";
import AtomSvg from "@/assets/icons/atom.svg"



// const arrowSVG = <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.74 39.62">
// <polygon class="cls-1" points="36.7 0 2.41 0 2.41 6.07 29.37 6.07 .26 35.19 4.55 39.48 33.67 10.37 33.67 37.34 39.74 37.34 39.74 3.04 36.7 0"/>
// </svg>




export default async function Home() {

  const data = await getWPContent("home")
  const homeLinksWide = []
  const homeLinks = []

  const heroImage = data?.data.home.nodes[0].homeContent.heroImage.node.mediaItemUrl
  const heroTitle = data?.data.home.nodes[0].homeContent.home
  const heroDescription = data?.data.home.nodes[0].homeContent.heroDescription
  const heroButtonLink = data?.data.home.nodes[0].homeContent.heroButtonLink
  const scondaryInformation = data?.data.home.nodes[0].homeContent.scondaryInformation
  const scondaryInformationDescription = data?.data.home.nodes[0].homeContent.scondaryInformationDescription
  const actionLinksTitle = data?.data.home.nodes[0].homeContent.actionLinksTitle
  data?.data.homeLinks.nodes.forEach(link => {
    link.homeLinkContent.makeWideLink ? homeLinksWide.push(link.homeLinkContent) : homeLinks.push(link.homeLinkContent)
  });
  const quotes = data?.data.quotes.nodes

  return (
      <>
      <div className=" text-black overflow-hidden"> 
        <div className="flex flex-col mx-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-2 md:col-span-1 md:pr-[20px]">
            <h1 className="text-[45px] md:text-[60px] mt-[40px] mb-[20px] leading-[70px] max-w-[900px] font-[600] text-mt-blue-dark">{heroTitle}</h1>
            <p className="font-[400] text-[20px]">{heroDescription}</p>
            <div className="my-4 border-solid border-white border-[1px] px-4 py-[2px] rounded-[7px] w-fit hover:text-black hover:bg-white relative z-[10]">
              <Link className="uppercase" href={`/${heroButtonLink}`}>get in touch</Link>
            </div>
            </div>
            <div className="col-span-1 relative top-[-100px] h-[200px] md:h-full md:top-0">
              <AtomSvg className="w-[700px] h-[400px]"/>
              {/* <img className="col-span-1" src={heroImage}/> */}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-[40px]">
        <div className="my-[20px] ml-[40px] pr-[20px] border-r-solid border-r-black border-r-[1px]">
           <h1 className="text-[32px] font-[500] mb-[20px]">{scondaryInformation}</h1>
           <p>{scondaryInformationDescription}</p>
        </div>
        <div className="flex flex-col my-[20px] ml-[40px]">
          <h1 className="text-[32px] font-[500] mb-[20px]">{actionLinksTitle}</h1>
          {homeLinks.map(link => 
          <div className="border-t-solid border-t-black border-t-[1px] max-w-[300px] flex items-center hover:fill-mt-blue-dark hover:text-mt-blue-dark">
            <ArrowSVG className="w-[20px] h-[20px] mr-[20px]"/>
            <Link className="py-[10px] text-[20px] uppercase " href={link.page}>{link.name}</Link>
          </div>
            )}
        </div>
      </div>
      <div className="mx-[40px] mb-[40px] flex flex-col ">
        <h1 className="text-[32px] font-[500] mb-[20px]">Learning Resources</h1>
        {homeLinksWide.map(link => 
        <div className="w-full grid grid-flow-col items-center bg-mt-yellow-light border-t-solid border-t-mt-yellow-dark border-t-[1px] p-[15px] hover:bg-mt-yellow-dark hover:text-white cursor-pointer hover:fill-white">
          <Link className="text-[24px] md:text-[30px]" href={link.page}>{link.name}</Link>
        <ArrowSVG className="w-[30px] h-[30px] mr-[20px] justify-self-end"/>
        </div>
        )}
      </div>
      <div className="bg-[#1F2121] flex flex-col text-white">
        <h2 className="self-center pt-[20px] pb-[40px] uppercase text-[24px] font-[450]">MONTANA SBIR SUCCESS STORIES</h2>
        <div className="mx-[40px] my-[20px] grid grid-flow-col md:overflow-visible overflow-x-scroll">
          {quotes.map(quote =>
              <div className="grid grid-flow-row px-4 min-w-[300px] border-r-solid border-r-white border-r-[0.5pt] mb-[40px]">
                <p className="text-[16px] font-[100] pb-[40px] self-start ">
                  {quote.quoteContent.quote}
                </p>
                <div className="self-end pb-[20px]">
                  <p className="uppercase font-bold">
                    {quote.quoteContent.author}
                  </p>
                  <p className="text-[14px] font-[100]">
                    {quote.quoteContent.company}
                  </p>
                </div>
              </div>  
          )}
        </div>
      </div>
        <div className="grid">
          <NewsLetter/>
        </div>
      </>
  );
}
