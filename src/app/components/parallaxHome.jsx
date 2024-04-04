"use client"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import BlueBgSVG from '@/assets/icons/blue-bg.svg'
import HandShake from '@/assets/icons/handshake.svg'

import React from 'react'

export default function ParallaxHome({title, paragraph}) {
  return (
    <Parallax pages={1}>
      <ParallaxLayer offset={0.1} speed={1}>
        <BlueBgSVG className="w-full h-[900px]"/>
      </ParallaxLayer>
      <ParallaxLayer offset={0.3} speed={2}>
        <HandShake className="w-[300px] h-[200px]"/>
      </ParallaxLayer>
      <ParallaxLayer offset={0.6} speed={3}>
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </ParallaxLayer>
    </Parallax>
  )
}
