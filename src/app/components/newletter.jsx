"use client"
import React from 'react'
import {useState} from 'react'
import Microscope from "@/assets/icons/microscope.svg"
import HubspotContactForm from './hubspotForm'

export default function NewsLetter() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")


    return (
    <div className="border-mt-blue-dark border-solid border-[1px] my-[80px] rounded-[10px] max-w-[1100px] justify-self-center">  
            <div className="grid grid-cols-1 md:grid-cols-2 p-4">      
              <div className=''>
              <h2 className="mb-[20px] text-[32px] font-[500]">Subscribe To Our News Letter</h2>
              <HubspotContactForm/>
              </div>
              <Microscope className="w-[310px] h-[370px] justify-self-center m-2"/>
          </div>
      </div>
  )
}
