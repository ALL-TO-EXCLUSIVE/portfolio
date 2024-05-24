"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Navbar from './Navbar';

const ShowNavbarOrNot = () => {

  const path = usePathname();
  console.log(path,"aa path che")
  console.log(path.includes("/admin"))
  // Check if current route is not admin panel
  // var showNavbar = false
  if(!path.search("/admin")){
    return null
  }else{
    console.log("navbar")
    return <Navbar/>
  }
}

export default ShowNavbarOrNot