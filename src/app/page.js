import Link from "next/link";
import ArrowSVG from "@/assets/icons/arrow.svg"
import NewsLetter from "./components/newletter";
import { getContent } from "../../sanity/sanit-utils";
import WaveSVG from "@/assets/icons/wave.svg"
import AtomYellow from "@/assets/icons/atomYellow.svg"
import TestTubes from "@/assets/icons/testTubes.svg"



export default async function Home() {

  const data = await getContent('homepage')
  
  const heroImage = data.heroImage
  const heroTitle = data.hero.header
  const heroDescription = data.hero.description
  const heroButtonLink = data.hero.buttonLink
  const secondaryInformationTitle = data.secondaryInfo.header 
  const secondaryInformationDescription = data.secondaryInfo.description
  const secondaryImage = data.secondaryImage
  const actionLinksTitle = data.actionLinkList.header
  const resourceLinksTitle = data.resourceLinkList.header
  const quoteHeader = data.quotesList.header
  const quotes = data.quotesList.quotes

  return (
      <>
      <div className="text-white bg-black h-[400px] sm:h-[500px] md:h-[650px] grid mt-[76px] justify-center duration-300  px-[20px] md:px-[40px]"> 
        <div className="max-w-[1400px] flex relative w-full overflow-hidden">
            <div className="md:mt-20 mt-10 z-10 w-full">
              <h1 className="text-[2rem] md:text-[4.2rem] mb-[20px] leading-[2.5rem] md:leading-[5.5rem] max-w-[1400px] font-[900] uppercase text-white">{heroTitle}</h1>
              
                <p className="md:text-[2.5rem] text-[1.5rem] font-[400] leading-[2.7rem] w-[320px] mt-6 ">
                  Start Your Journey&nbsp; 
                <Link className="text-mt-blue-dark underline hover:text-mt-blue-light duration-300" href={`${heroButtonLink}`}>Today</Link>
                </p>
            </div>
          <img className="absolute bottom-0" src={heroImage}/>
        </div>
      </div>
      <div className="grid justify-center bg-mt-yellow-light md:px-[40px] px-[10px] py-20 border-b-mt-yellow-dark border-b-[1px]">
      <div className="flex flex-col w-full max-w-[1400px]">
            <div className="grid grid-cols-4 w-full md:mb-20">
            <div className="md:col-span-1 gap-0 h-fit grid justify-items-center self-center text-center mx-4 col-span-4">
              <p>Montana Companies Have Earned Over</p>
              <h1 className="font-[900] text-[4rem] leading-[4rem] text-mt-yellow-dark">$273M</h1>
              <p>In SBIR & STTR Funds</p>
            </div>
            <div className=" text-center md:text-left my-10 md:my-0 md:border-l-[1px] border-l-mt-yellow-dark px-6 md:col-span-3 col-span-4">
            <h1 className="text-[32px] font-[500] mb-[20px]">How We Help</h1>
            <p className="text-[16px] md:text-[18px]">{heroDescription}</p>
            
            </div>
            
            </div>
           <div className="grid grid-cols-4">
           <div className="md:col-span-1 col-span-4 gap-0 h-fit grid justify-items-center self-center mt-10 md:mt-0 text-center mx-4">
              <p>To Date</p>
              <h1 className="font-[900] text-[4rem] leading-[4rem] text-mt-yellow-dark">148</h1>
              <p>Montana Businesses Have Received Funding</p>
            </div>
            <div className="text-center md:text-left md:border-l-[1px] border-l-mt-yellow-dark px-6 col-span-4 md:col-span-3 my-10 md:my-0">
              <h1 className="text-[32px] font-[500] mb-[20px] ">{secondaryInformationTitle}</h1>
              <p className="text-[16px] md:text-[18px]">{secondaryInformationDescription}</p>
            </div>
            
            </div>
      </div>
      </div>
        <div className="flex flex-col items-center w-full my-20 px-[20px] md:px-10">
        <h1 className="max-w-[1400px] text-[40px] md:text-[60px] border-b-solid border-b-[1px] border-black uppercase w-full font-[100]">Resources</h1>
        <div className="max-w-[1400px] w-full flex flex-col mt-10">
        
      <div className="mb-[80px] flex flex-col">
        <h1 className="text-[24px] md:text-[32px] font-[500] mb-[20px]">{actionLinksTitle}</h1>
        {data.actionLinkList.actionLinks.map(link => 
        <div className="w-full grid grid-flow-col items-center bg-mt-blue-light border-t-solid border-t-mt-blue-dark border-t-[1px] p-[15px] hover:bg-mt-blue-dark hover:text-white cursor-pointer hover:fill-white" key={link.page}>
          <Link className="text-[24px] md:text-[30px]" href={link.page}>{link.name}</Link>
        </div>
        )}
      </div>
      <div className="mb-[80px] flex flex-col ">
        <h1 className="text-[24px] md:text-[32px] font-[500] mb-[20px]">{resourceLinksTitle}</h1>
        {data.resourceLinkList.resourceLinks.map(link => 
        <div className="w-full grid grid-flow-col items-center bg-mt-yellow-light border-t-solid border-t-mt-yellow-dark border-t-[1px] p-[15px] hover:bg-mt-yellow-dark hover:text-white cursor-pointer hover:fill-white" key={link.page}>
          <Link className="text-[24px] md:text-[30px]" href={link.page}>{link.name}</Link>
        </div>
        )}
      </div>
      <WaveSVG className="w-full h-[100px] md:h-[200px]"/>
      </div>
      </div>
     
      
      <div className="bg-black py-[40px] px-[20px] flex text-white justify-center">
        <div className="max-w-[1400px] w-full flex flex-col mx-[20px] md:mx-[40px]">
        <h2 className="self-center px-[20px] pt-[20px] pb-[40px] uppercase text-[24px] font-[450]">{quoteHeader}</h2>
        <div className="my-[20px] grid grid-flow-col md:overflow-visible overflow-x-scroll">
          {quotes.map(quote =>
              <div className="grid grid-flow-row px-4 min-w-[300px] border-r-solid border-l-white border-l-[0.5pt] mb-[40px]" key={quote.author}> 
                <p className="text-[16px] font-[100] pb-[40px] self-start ">
                  {`"${quote.quote}"`}
                </p>
                <div className="self-end pb-[20px]">
                  <p className="uppercase font-bold">
                    {quote.author}
                  </p>
                  <p className="text-[14px] font-[100]">
                    {quote.company}
                  </p>
                </div>
              </div>  
          )}
        </div>
        </div>
      </div>
        <div className="grid">
          <NewsLetter/>
        </div>
      </>
  );
}
