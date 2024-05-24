import Image from 'next/image'
import React from 'react'

const ShowImageFull = ({src}) => {
  return (
    <div className='fixed translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] z-20'>
        <Image className='h-full w-full object-cover' src={src} height={1000} width={1000} alt=''/>
    </div>
  )
}

export default ShowImageFull