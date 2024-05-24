import React from 'react'
import HeroBgImages from "@/components/HeroBgImages";

const MainPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
    <div className="w-full text-[#f4f4f4] mt-10">
      <div>
      <h1 className="text-2xl">hey, I&apos;m dev 👋</h1>
      <p className="mt-5">I build beautiful and interactive web experiences.  Constantly learning in the exciting world of front-end development. Intermediate developer, eager to create something awesome with you.</p>
      </div>
      <HeroBgImages/>
      <div className="w-full grid grid-cols-2  grid-rows-1  lg:grid-cols-4 gap-3">
        {/* <h1 className=" col-span-2 text-center lg:col-span-4 text-3xl h-fit p-5 bg-[#121212]">Skills</h1> */}
      <div className=" col-span-2 lg:col-span-2 relative border border-slate-900 flex flex-col items-center text-white p-1 rounded-lg bora overflow-hidden">
        <div class="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#f2f2f2_20deg,transparent_120deg)]"></div>
        <div className="relative backdrop-blur-xl z-20 flex flex-col w-full h-full rounded-[0.60rem] bg-[#080808ee] p-5">
        <h1 className="text-xl font-bold">Languages</h1>
          <ul className="list-disc list-inside mt-4">
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
            <li>Python basic</li>
          </ul>
        </div>
        </div>
        <div className=" col-span-2 lg:col-span-2 relative border border-slate-900 flex flex-col items-center text-white p-1 rounded-lg bora overflow-hidden">
        <div className="animate-rotate absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#f2f2f2_20deg,transparent_120deg)]"></div>
        <div className="relative backdrop-blur-xl z-20 flex flex-col w-full rounded-[0.60rem] bg-[#080808ee] p-5">
        <h1 className="text-xl font-bold">Technologies & Frameworks</h1>
          <ul className="list-disc list-inside mt-4">
            <li>React + Next js</li>
            <li>Intermediate Angular</li>
            <li>Node js</li>
            <li>Framer</li>
          </ul>
        </div>
        </div>
        {/* <div className="col-span-2 text-center bg-[#4ee22d] flex items-center justify-center text-black">Others</div> */}
      </div>
    </div>
  </main>
  )
}

export default MainPage