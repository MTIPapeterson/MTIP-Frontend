"use client"

import { useEffect, useState } from "react";
import { getWPContent } from "../wordpressCMS/wordpressContent";

const atomImage = <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 984.725 448.487">
<g id="Group_545" data-name="Group 545" transform="translate(986.448 -1631.083)">
  <path id="Path_774" data-name="Path 774" d="M928.687,771.231A118.9,118.9,0,0,0,937.269,994.1" transform="translate(-1559.779 989.232)" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="3"/>
  <path id="Path_775" data-name="Path 775" d="M949.086,814.8a118.872,118.872,0,1,0,178.549,119.216v-.011" transform="translate(-1516.107 1042.318)" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="3"/>
  <circle id="Ellipse_10" data-name="Ellipse 10" cx="118.863" cy="118.863" r="118.863" transform="translate(-550.256 1746.599)" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="3"/>
  <path id="Path_776" data-name="Path 776" d="M1125.936,833.693c.02-.415.02-.832.02-1.247a118.862,118.862,0,1,0-237.724,0c0,3.034.115,6.047.333,9.017a118.889,118.889,0,0,0,64.069,96.66,117.5,117.5,0,0,0,16.79,7.088" transform="translate(-1519.657 919)" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="3"/>
  <path id="Path_777" data-name="Path 777" d="M809.538,773.61c-51,19.386-80.673,42.607-80.673,67.56,0,51.811,127.934,96.13,308.967,114.229h.007q21.013,2.12,42.951,3.729c2.755.2,5.517.406,8.29.592.53.042,1.063.073,1.591.115,36.786,2.5,75.291,3.957,114.979,4.239h.007q7.014.047,14.069.051,25.478,0,50.324-.635,16.581-.436,32.82-1.131,10.878-.452,21.6-1.04,20.693-1.121,40.726-2.691h.011c48.975-3.791,94.646-9.463,135.722-16.673" transform="translate(-1713.813 992.131)" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="3"/>
  <path id="Path_778" data-name="Path 778" d="M995.192,749.791c78.718,4.073,150.538,12.873,210.536,25.162" transform="translate(-1389.348 963.112)" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="3"/>
  <path id="Path_779" data-name="Path 779" d="M1127.435,766.145c82.417,21.994,132.878,51.582,132.878,84.12,0,36.2-62.46,68.745-161.854,91.239" transform="translate(-1263.537 983.036)" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="3"/>
  <path id="Path_780" data-name="Path 780" d="M785.549,786.756c60.371-16.83,139-29.452,228.063-35.925" transform="translate(-1644.755 964.379)" fill="none" stroke="#585858" stroke-miterlimit="10" stroke-width="3"/>
  <path id="Path_781" data-name="Path 781" d="M1125.659,861.447a24.425,24.425,0,1,1-24.424-24.423A24.423,24.423,0,0,1,1125.659,861.447Z" transform="translate(-1289.913 1069.388)" fill="none" stroke="#585858" stroke-width="3"/>
  <path id="Path_782" data-name="Path 782" d="M814.054,786.275a24.425,24.425,0,1,1-24.423-24.423A24.422,24.422,0,0,1,814.054,786.275Z" transform="translate(-1669.54 977.806)" fill="none" stroke="#585858" stroke-width="3"/>
  <path id="Path_783" data-name="Path 783" d="M1138.552,777.467a24.425,24.425,0,1,1-24.424-24.423A24.422,24.422,0,0,1,1138.552,777.467Z" transform="translate(-1274.206 967.075)" fill="none" stroke="#585858" stroke-width="3"/>
</g>
</svg>

export default function Home() {
   const [data, setData] = useState(null)

   const [isLoading, setIsLoading] = useState(true)

   let actionLinksTitle
   let heroButtonLink
   let heroDescription
   let heroTitle
   let scondaryInformation
   let scondaryInformationDescription
   let heroImage
   let homeLinks = []
   let homeLinksWide = []
   let quotes

   useEffect(() => {
      getWPContent("home", setData) 
  }, []);

  useEffect( () => {
      console.log(data)
      data && setIsLoading(false)
  }, [data])

  if (!isLoading){
    heroImage = data?.data.home.nodes[0].homeContent.heroImage.node.mediaItemUrl
    heroTitle = data?.data.home.nodes[0].homeContent.home
    heroDescription = data?.data.home.nodes[0].homeContent.heroDescription
    heroButtonLink = data?.data.home.nodes[0].homeContent.heroButtonLink
    scondaryInformation = data?.data.home.nodes[0].homeContent.scondaryInformation
    scondaryInformationDescription = data?.data.home.nodes[0].homeContent.scondaryInformationDescription
    actionLinksTitle = data?.data.home.nodes[0].homeContent.actionLinksTitle
    data?.data.homeLinks.nodes.forEach(link => {
      link.homeLinkContent.makeWideLink ? homeLinksWide.push(link.homeLinkContent) : homeLinks.push(link.homeLinkContent)
    });
    quotes = data?.data.quotes.nodes
  }

  const Body = () => { 
    return (
    <>
      <div className="bg-[#1F2121] text-white overflow-x-hidden"> 
        <div className="flex flex-col mx-[40px] h-[600px]">
          <h1 className="uppercase text-[60px] my-[40px] tracking-tight leading-[60px] max-w-[900px]">{heroTitle}</h1>
          <div className="grid grid-cols-3">
            <p className="col-span-2">{heroDescription}</p>
            {/* <img className="col-span-1" src={heroImage}/> */}
            <div className="">
              {atomImage}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 my-[40px]">
        <div className="p-[40px]">
           <h1>{scondaryInformation}</h1>
           <p>{scondaryInformationDescription}</p>
        </div>
        <div className="flex flex-col p-[40px]">
          <h1>{actionLinksTitle}</h1>
          {homeLinks.map(link => <a>{link.name}</a>)}
        </div>
      </div>
      <div className="mx-[40px] flex flex-col ">
        <h1>Learning Resources</h1>
        {homeLinksWide.map(link => <a>{link.name}</a>)}
      </div>
      <div className="bg-[#1F2121] flex flex-col text-white">
        <h2 className="self-center">MONTANA SBIR SUCCESS STORIES</h2>
        <div className="mx-[40px] my-[20px] flex ">
          {quotes.map(quote => {
            return(
              <div className="flex flex-col pr-4 w-[350px]">
                <p>
                  {quote.quoteContent.quote}
                </p>
                <p className="uppercase font-bold">
                  {quote.quoteContent.author}
                </p>
                <p>
                  {quote.quoteContent.company}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </>
    );
  }

  return (
    <main>
      <h1>
        {isLoading && "Loading"}
        {!isLoading && <Body/>}
      </h1>
    </main>
  );
}
