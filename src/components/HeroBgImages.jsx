"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

gsap.registerPlugin(useGSAP);

const HeroBgImages = () => {
  return (
    <div className="w-full h-[700px] grid grid-cols-2 lg:grid-cols-3 py-10 grid-rows-5 lg:grid-rows-4 gap-4">
      <div className="w-full h-full col-span-2 row-span-2 lg:col-span-1 lg:row-span-1 rounded-lg overflow-hidden imgContainer">
        <Image
          className="h-full w-full object-cover"
          src={"/dev.jpg"}
          height={1000}
          width={1000}
          alt=""
        />
      </div>
      <Link
        href={""}
        className="w-full h-full flex items-center justify-center bg-gradient-to-r from-red-500 to-indigo-600 lg:col-span-1 lg:row-span-1  rounded-lg lg:rounded-full overflow-hidden text-3xl shadow-inner shadow-[#ffffff]"
      >
        contact
      </Link>
      <div className="w-full h-full col-span-1 row-span-1 rounded-lg overflow-hidden imgContainer">
        <Image
          className="h-full w-full object-cover"
          src={"/web1.gif"}
          height={1000}
          width={1000}
          alt=""
        />
      </div>
      <div
        className="w-full h-full bg-gradient-to-r from-teal-400 to-yellow-200 col-span-1 row-span-1 rounded-lg overflow-hidden pointer-events-none"
        contextMenu={"false"}
      >
        {/* <Image className='h-full w-full object-cover object-left' src={"/black.png"} height={1000} width={1000} alt=''/> */}
      </div>
      <div className="w-full h-full text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 text-[#f3f3f3] text-center flex items-center justify-center row-span-1 col-span-2  rounded-lg overflow-hidden">
        {/* <Image className='h-full w-full object-cover' src={"/1.jpeg"} height={1000} width={1000}/> */}
        <h1>ALL TO EXCLUSIVE</h1>
      </div>
      <div className="w-full h-full col-span-3 row-span-2 rounded-lg overflow-hidden imgContainer">
        <Image
          className="h-full w-full object-cover"
          src={"/av.gif"}
          height={1000}
          width={1000}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroBgImages;
