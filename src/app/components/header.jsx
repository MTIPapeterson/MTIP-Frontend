import React from 'react'
import NavBar from './navBar'
import { getContent } from '../../../sanity/sanit-utils'

export default async function Header(){

   const data = await getContent("resources")

    return (<NavBar resources={data}/>)
}
