import formatDate from '@/utils/formatDate';
import Link from 'next/link';
import React from 'react'

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/blogs`, {
    next:{revalidate:20}
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const blogsPage = async() => {
  const res = await getData();
  const data = res.data
  return (
    <div className='mt-10'>
      <ul className='text-white '>
        {
          data 
          &&
          data.map((blog,index)=>(
            <li key={index} className='flex flex-col mb-5 border-b-2'> 
              <Link href={`/blogs/${blog.id}`} className='text-2xl font-semibold font-[poppins]'>{blog.title}  </Link>
              <span className='text-gray-300 text-sm'> {blog.viewCount} views • {formatDate(blog.createdAt)} </span>
            </li>
          ))
        }
      </ul>
    </div>  
  )
}

export default blogsPage