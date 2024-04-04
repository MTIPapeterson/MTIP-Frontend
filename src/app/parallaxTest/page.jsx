"use client"

import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import BlueBgSVG from '@/assets/icons/blue-bg.svg'
import HandShake from '@/assets/icons/handshake.svg'


export default function ParalLaxTest({data}) {
  return (
    <Parallax pages={2} className='bg-white top-0'>
      <ParallaxLayer offset={0.1} speed={1}>
        <BlueBgSVG className="w-full h-[900px]"/>
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={2}>
        <HandShake className="w-[300px] h-[200px]"/>
      </ParallaxLayer>
      <div>
      <ParallaxLayer offset={.4} speed={3}>
        <h1>Partnership Driven</h1>
        <p>The Montana Innovation Partnership powered by MSU TechLink promotes technology-based economic development in the state through education and expert technical assistance for SBIR/STTR applicants. We collaborate with universities and colleges, accelerators, regional and national FAST partners, and other technology-based economic development organizations across Montana to help connect you to a broad network of support as you launch and grow your business in Montana.</p>
      </ParallaxLayer>
      </div>
    </Parallax>
  )
}