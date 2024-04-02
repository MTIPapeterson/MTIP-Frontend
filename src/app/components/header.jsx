import React from 'react'
import Link from 'next/link'
import { getWPContent } from '@/wordpressCMS/wordpressContent'
import HeaderDropdown from './headerDropdown'
import Hamburger from '@/assets/icons/Hamburger.svg'
import Xsvg from '@/assets/icons/x.svg'
import NavBar from './navBar'

export default async function Header(){

   const data = await getWPContent("resourceLinks")

    return (<NavBar resources={data}/>)
}
