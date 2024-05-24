"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
        <nav className=" w-full text-white flex items-center justify-start gap-5 my-5 mt-20 overflow-hidden">
        <Link href={"/"}>home</Link>
        <Link href={"/works"}>work</Link>
        <Link href={"/blogs"}>blog</Link>
      </nav>
  )
}

export default Navbar