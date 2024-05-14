"use client"
import React, { useState, useRef, useEffect } from 'react'
import { PortableText } from '@portabletext/react'
import { textStyle } from '../../components/portableTextStyle'
import Image from 'next/image'

export default function StepCar({steps, stepHeader}) {

    const [currTarget, setCurrTarget] = useState(steps[0].header)

    const handleClick = (event) => {
        event.preventDefault(); // Prevent the default anchor behavior


        const targetId = event.currentTarget.getAttribute('href').slice(1); // Get the ID from the href attribute
        const targetElement = document.getElementById(targetId);

        setCurrTarget(targetId)
    
        if (targetElement) {
          // Use scrollIntoView to scroll the element into the center of the view
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      };

    const StepButton = ({target, index}) => {
        return(
            <a className={`hover:text-mt-blue-dark ${target === currTarget ? "text-mt-blue-dark": "text-black"} pb-2 flex`} key={target} href={`#${target}`} onClick={handleClick}><span className={`font-[600] text-mt-blue-dark p-2 rounded-full pt-0 pb-0 mr-2 ${target === currTarget ? "bg-mt-blue-light" : "bg-white"} `}>{index + 1}</span><span className=''>{target}</span></a>
        )
    } 


  const elementRefs = useRef([]); // Use an array to store refs

  useEffect(() => {
    const options = {
      root: null, // using the viewport as the root
      rootMargin: '0px',
      threshold: 0.5 // 50% of the item is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrTarget(entry.target.id);
        }
      });
    }, options);

    // Observe each element in ref array
    elementRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Cleanup observer on unmount
    return () => {
      elementRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
    }, [steps]);

  return (
    <div className='flex flex-col md:flex-row w-full my-10'>
          <div className='flex flex-col mb-4 md:mb-0 mr-0 md:mr-5 bg-white md:w-[300px]'>
            <h1 className='text-[32px] uppercase mb-2'>{stepHeader ? stepHeader : "Steps"}</h1>
            {steps.map((e,i) => <StepButton key={i} target={e.header} index={i}/>)}
          </div>
           <div className='relative overflow-y-hidden w-full h-[600px] md:h-[700px] rounded-lg border-mt-blue-dark border flex items-center justify-center'>
          <Image 
            className='absolute'
            src={'/topo-bg.webp'}
            height={1200}
            width={1200}
          />
          
          <div className='h-[600px] md:h-[700px] md:w-fit carousel carousel-vertical rounded-lg'>
            {steps.map((e,i) => <div ref={e => elementRefs.current[i] = e} key={e.header} id={e.header} className='h-[600px] md:h-[700px] carousel-item pl-8 md:pl-10 flex'>
              <div className="flex flex-col border-l-2 border-mt-blue-dark pl-6 md:pl-10 border-dashed relative center" >
                <div className='rounded-full absolute h-12 w-12 border-2 border-mt-blue-dark -left-6 -top-6 flex items-center justify-center text-mt-blue-dark bg-mt-blue-light mt-12 md:mt-20 text-[24px] font-[700]'>{i + 1}</div>
              <div className='max-w-[600px] p-2 mx-2 bg-mt-blue-light rounded-md mt-6 md:mt-14 overflow-y-scroll max-h-[550px] md:max-h-[650px]'>  
                <h1 className='text-[20px] md:text-[24px] font-[500] mb-5 text-mt-blue-dark'>{e.header}</h1>
                <PortableText value={e.bodyText} components={textStyle}/>
              </div>
            </div>
            </div>
            )   
            }
          </div>
          </div>
          </div>
  )
}
