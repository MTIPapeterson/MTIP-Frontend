import Link from "next/link";
import NewsLetter from "./components/newletter";
import { getContent } from "../../sanity/sanit-utils";
import WaveSVG from "@/assets/icons/wave.svg"
import ChipSVG from "@/assets/icons/chip.svg"
import { formatDate } from "../../sanity/sanit-utils";

export default async function Home() {

  const data = await getContent('homepage')
  const events = await getContent('events')
  
  const heroImage = data.heroImage
  const heroTitle = data.hero.header
  const heroButtonLink = data.hero.buttonLink
  const secondaryHeader1 = data.secondaryInfo.header1 
  const secondaryHeader2 = data.secondaryInfo.header2
  const secondaryDescription1 = data.secondaryInfo.description1
  const secondaryDescription2 = data.secondaryInfo.description2
  const secondaryStat1 = data.secondaryInfo.statistic1
  const secondaryStat2 = data.secondaryInfo.statistic2
  const actionLinksTitle = data.actionLinkList.header
  const resourceLinksTitle = data.resourceLinkList.header
  const quoteHeader = data.quotesList.header
  const quotes = data.quotesList.quotes

  const Events = () => {
    return (
      <div className="max-w-[1400px] grid grid-cols-1 md:grid-cols-2 border-mt-blue-dark border rounded-md p-4">
        <div>
        <h1 className="col-span-1 mb-5 text-[32px] font-[500]">Upcoming Events</h1>
        <div className="flex flex-col">
        {events.map(e => <div className="bg-mt-blue-light rounded-md p-2 mb-4 grid md:grid-cols-3 grid-cols-1">
          <h2 className="pb-2 mb-2 md:mb-0 md:pb-0 md:pr-4 border-b md:border-r md:border-b-0 border-mt-blue-dark md:mr-4 font-[600] text-[20px] md:text-[30px] text-center text-mt-blue-dark col-span-1">{formatDate(e.date)}</h2>
          <div className="flex flex-col col-span-1 md:col-span-2">
          <h2 className="text-[20px] font-[450] self-center md:self-start text-center md:text-left">{e.title}</h2>
          <a className="text-[18px] text-mt-blue-dark underline hover:text-black mt-2 text-center md:text-left self-center md:self-start" href={e.link}>Learn More</a>
          </div>
          
          </div>)}
        </div>
        </div> 
        <ChipSVG className="w-[270px] h-[200px] md:w-[400px] md:h-[300px] justify-self-center stroke-[1px] self-center"/>
      </div>
    )
  }

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
              <p className="font-[500]">{secondaryStat1.header}</p>
              <h1 className="font-[900] text-[4rem] leading-[4rem] text-mt-yellow-dark">{secondaryStat1.statistic}</h1>
              <p className="font-[500]">{secondaryStat1.footer}</p>
            </div>
            <div className=" text-center md:text-left my-10 md:my-0 md:border-l-[1px] border-l-mt-yellow-dark px-6 md:col-span-3 col-span-4">
            <h1 className="text-[32px] font-[500] mb-[20px]">{secondaryHeader1}</h1>
            <p className="text-[16px] md:text-[18px]">{secondaryDescription1}</p>
            
            </div>
            
            </div>
           <div className="grid grid-cols-4">
           <div className="md:col-span-1 col-span-4 gap-0 h-fit grid justify-items-center self-center mt-10 md:mt-0 text-center mx-4">
              <p className="font-[500]"> {secondaryStat2.header}</p>
              <h1 className="font-[900] text-[4rem] leading-[4rem] text-mt-yellow-dark">{secondaryStat2.statistic}</h1>
              <p className="font-[500]">{secondaryStat2.footer}</p>
            </div>
            <div className="text-center md:text-left md:border-l-[1px] border-l-mt-yellow-dark px-6 col-span-4 md:col-span-3 my-10 md:my-0">
              <h1 className="text-[32px] font-[500] mb-[20px] ">{secondaryHeader2}</h1>
              <p className="text-[16px] md:text-[18px]">{secondaryDescription2}</p>
            </div>
            
            </div>
      </div>
      </div>


      <div className="flex flex-col items-center w-full my-20 px-[20px] md:px-10">
      {data.settings.showLatestEvent ? <Events/> : "" }
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
        <div className="grid px-5 md:px-10">
          <NewsLetter/>
        </div>
      </>
  );
}
