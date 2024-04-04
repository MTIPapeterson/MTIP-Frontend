import Link from "next/link";
import ArrowSVG from "@/assets/icons/arrow.svg"
import { getWPContent } from "@/wordpressCMS/wordpressContent";
import NewsLetter from "./components/newletter";
import AtomSvg from "@/assets/icons/atom.svg"
import ParallaxHome from "./components/parallaxHome";
import HandShake from '@/assets/icons/handshake.svg'


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
  const secondaryInformationTitle = data?.data.home.nodes[0].homeContent.scondaryInformation
  const secondaryInformationDescription = data?.data.home.nodes[0].homeContent.scondaryInformationDescription
  const actionLinksTitle = data?.data.home.nodes[0].homeContent.actionLinksTitle
  data?.data.homeLinks.nodes.forEach(link => {
    link.homeLinkContent.makeWideLink ? homeLinksWide.push(link.homeLinkContent) : homeLinks.push(link.homeLinkContent)
  });
  const quotes = data?.data.quotes.nodes

  return (
      <>
      <div className=" text-black overflow-hidden bg-mt-blue-light min-h-[500px] border-b-mt-blue-dark border-b-[1px]"> 
        <div className="flex flex-col mx-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="col-span-1 md:col-span-2 md:pr-[20px]">
              <h1 className="text-[55px] md:text-[60px] mt-[40px] mb-[20px] leading-[60px] md:leading-[70px] max-w-[900px] font-[600] text-mt-blue-dark">{heroTitle}</h1>
              <p className="font-[400] text-[20px]">{heroDescription}</p>
              <div className="my-6 border-solid bg-white border-mt-blue-dark border-[1px] px-4 py-[2px] rounded-[7px] w-fit hover:text-white hover:bg-mt-blue-dark relative z-[10] transition duration-150">
                <Link className="uppercase text-[20px]" href={`/${heroButtonLink}`}>get in touch</Link>
              </div>
            </div>
            <div className="col-span-1 relative top-[-100px] h-[200px] md:h-full md:top-0">
              <AtomSvg className="w-[700px] h-[400px]"/>
              {/* <img className="col-span-1" src={heroImage}/> */}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 my-[40px]">
        <div className="col-span-1 my-[80px] ml-[40px] pr-[20px] border-r-solid border-r-black border-r-[1px]">
          <div className="grid grid-flow-col">
            <HandShake className="w-[350px] h-[200px] self-center justify-self-center md:flex hidden"/>
            <div>
              <h1 className="text-[32px] font-[500] mb-[20px]">{secondaryInformationTitle}</h1>
              <p className="text-[18px] max-w-[700px]">{secondaryInformationDescription}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[40px] mx-[40px] bg-mt-blue-light p-[25px] rounded-[10px]">
          <h1 className="text-[32px] font-[500] mb-[20px] self-center">{actionLinksTitle}</h1>
          {homeLinks.map(link => 
          <div className="border-t-solid border-t-black border-t-[1px] w-full flex items-center hover:fill-mt-blue-dark hover:text-mt-blue-dark" key={link.page}>
            <ArrowSVG className="w-[20px] h-[20px] mr-[20px]"/>
            <Link className="py-[10px] text-[20px] uppercase " href={link.page}>{link.name}</Link>
          </div>
            )}
        </div>
      </div>
      <div className="mx-[40px] mb-[80px] flex flex-col ">
        <h1 className="text-[32px] font-[500] mb-[20px]">Learning Resources</h1>
        {homeLinksWide.map(link => 
        <div className="w-full grid grid-flow-col items-center bg-mt-yellow-light border-t-solid border-t-mt-yellow-dark border-t-[1px] p-[15px] hover:bg-mt-yellow-dark hover:text-white cursor-pointer hover:fill-white" key={link.page}>
          <Link className="text-[24px] md:text-[30px]" href={link.page}>{link.name}</Link>
        <ArrowSVG className="w-[30px] h-[30px] mr-[20px] justify-self-end"/>
        </div>
        )}
      </div>
      <div className="bg-[#1F2121] py-[40px] flex flex-col text-white">
        <h2 className="self-center pt-[20px] pb-[40px] uppercase text-[24px] font-[450]">MONTANA SBIR SUCCESS STORIES</h2>
        <div className="mx-[40px] my-[20px] grid grid-flow-col md:overflow-visible overflow-x-scroll">
          {quotes.map(quote =>
              <div className="grid grid-flow-row px-4 min-w-[300px] border-r-solid border-r-white border-r-[0.5pt] mb-[40px]" key={quote.quoteContent.author}> 
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
