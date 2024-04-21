import Link from "next/link";
import ArrowSVG from "@/assets/icons/arrow.svg"
import NewsLetter from "./components/newletter";
import { getContent } from "../../sanity/sanit-utils";


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
      <div className="text-white bg-black h-[650px] grid mt-[76px] justify-center"> 
        <div className="max-w-[1400px] flex relative w-full">
            <div className="mt-20 z-10 w-full mx-[40px]">
              <h1 className="text-[50px] md:text-[4.2rem] mb-[20px] leading-[60px] md:leading-[5.5rem] max-w-[1400px] font-[900] uppercase text-white">{heroTitle}</h1>
              {/* <p className="font-[400] text-[20px] max-w-[600px]">{heroDescription}</p> */}
                <p className="text-[2.5rem] font-[400] leading-[2.7rem] w-[320px] mt-6">
                  Start Your Journey&nbsp; 
                <Link className="text-mt-blue-dark underline hover:text-mt-blue-light duration-300" href={`${heroButtonLink}`}>Today</Link>
                </p>
            </div>
              
        <img className="absolute bottom-0" src={heroImage}/>
        </div>
      </div>
      <div className="grid justify-center mx-[40px]">
      <div className="grid grid-cols-1 my-[20px] w-full max-w-[1400px]">
        <div className="col-span-1 my-[40px] md:my-[80px]">
          <div className="grid grid-flow-row md:grid-flow-col">
            <img className="w-[300px] h-[200px] self-center justify-self-center md:mb-0 mb-[20px]" src={secondaryImage}/>
            <div>
              <h1 className="text-[32px] font-[500] mb-[20px]">{secondaryInformationTitle}</h1>
              <p className="text-[18px]">{secondaryInformationDescription}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-[40px] bg-mt-blue-light p-[25px] rounded-[10px]">
          <h1 className="text-[32px] font-[500] mb-[20px] self-center">{actionLinksTitle}</h1>
          {data.actionLinkList.actionLinks.map(link => 
          <div className="border-t-solid border-t-black border-t-[1px] w-full flex items-center hover:fill-mt-blue-dark hover:text-mt-blue-dark" key={link.page}>
            <ArrowSVG className="w-[20px] h-[20px] mr-[20px]"/>
            <Link className="py-[10px] text-[20px] uppercase " href={link.page}>{link.name}</Link>
          </div>
            )}
        </div>
      </div>
      
      <div className="mb-[80px] flex flex-col ">
        <h1 className="text-[32px] font-[500] mb-[20px]">{resourceLinksTitle}</h1>
        {data.resourceLinkList.resourceLinks.map(link => 
        <div className="w-full grid grid-flow-col items-center bg-mt-yellow-light border-t-solid border-t-mt-yellow-dark border-t-[1px] p-[15px] hover:bg-mt-yellow-dark hover:text-white cursor-pointer hover:fill-white" key={link.page}>
          <Link className="text-[24px] md:text-[30px]" href={link.page}>{link.name}</Link>
        <ArrowSVG className="w-[30px] h-[30px] mr-[20px] justify-self-end"/>
        </div>
        )}
      </div>
      </div>
      <div className="bg-black py-[40px] flex text-white justify-center">
        <div className="max-w-[1400px] w-full flex flex-col mx-[40px]">
        <h2 className="self-center pt-[20px] pb-[40px] uppercase text-[24px] font-[450]">{quoteHeader}</h2>
        <div className="my-[20px] grid grid-flow-col md:overflow-visible overflow-x-scroll">
          {quotes.map(quote =>
              <div className="grid grid-flow-row px-4 min-w-[300px] border-r-solid border-l-white border-l-[0.5pt] mb-[40px]" key={quote.author}> 
                <p className="text-[16px] font-[100] pb-[40px] self-start ">
                  "{quote.quote}"
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
