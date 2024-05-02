"use client"
import React from 'react'
import {useState} from 'react'
import Microscope from "@/assets/icons/microscope.svg"
import HubspotContactForm from './hubspotForm'

export default function NewsLetter() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")


  const handleOnSubmit = (e) => {
    console.log(firstName, lastName, email)
    e.preventDefault()
  }

    return (
    <div className="border-mt-blue-dark border-solid border-[1px] my-[80px] rounded-[10px] max-w-[1100px] justify-self-center">
        <form onSubmit={handleOnSubmit}>  
            <div className="grid grid-cols-1 md:grid-cols-2 py-6">
              {/* <div className="mx-[40px] flex flex-col">
              
                <input 
                className="px-4 mt-2 py-[2px]  placeholder-gray-400 border-mt-blue-dark border-solid border-[1px] rounded-[5px]"
                type="text" 
                name="firstName" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
                placeholder="First Name"
                />
                <input 
                className="px-4 mt-2 py-21px] placeholder-gray-400 border-mt-blue-dark border-solid border-[1px] rounded-[5px]"
                type="text" 
                name="lastName" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
                placeholder="Last Name"
                />
                <input 
                className="px-4 mt-2 2y-[1px] placeholder-gray-400 border-mt-blue-dark border-solid border-[1px] rounded-[5px]"
                type="text" 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
                />
              <button className="border-mt-blue-dark border-solid border-[1px] rounded-[5px] max-w-[100px] bg-mt-blue-light my-6 mb-12 md:mb-6 uppercase hover:text-white hover:bg-mt-blue-dark self-center w-full md:self-start">Submit</button>
              </div> */}
              
              <div className='p-4'>
                <h2 className="my-[20px] text-[32px] font-[500]">Subscribe To Our News Letter</h2>
              <HubspotContactForm/>
              </div>
              <Microscope className="w-[310px] h-[370px] justify-self-center m-2"/>
          </div>
        </form>
      </div>
  )
}
