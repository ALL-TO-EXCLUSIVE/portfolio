
"use client"
import React, { useState } from 'react';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css';

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const MyComponent = () => {
    const HandleSubmit = async(e) =>{
    
        // e.preventDefault()
        console.log(content)
        const res = await fetch("http://localhost:3000/api/blogs",
            {
                method:"POST",
                body: JSON.stringify({ 
                  title,
                    content,
                    isPublished,
                    slug:title.replaceAll(" ","-")
            
                }), 
            },
        )
    
        console.log(res)
    }
    const [title, setTitle] = useState("")
    const [content, setcontent] = useState("")
    const [isPublished, setIsPublished] = useState(false)
    
    function handleChange(content){
        setcontent(content)
        console.log(content); //Get Content Inside Editor
    }
  return (
    <div className=' w-full py-10 flex flex-col gap-5 items-start justify-center text-lg'>
      <h1 className='text-white text-xl'>Dev, Create Your Blog</h1>
     <form onSubmit={HandleSubmit}>
     <label for="title" className="block mb-2 text-sm font-medium text-white">Enter title</label>

    <input className='w-full p-2.5 rounded-lg text-sm text-gray-900 mb-[10px]' id='title' placeholder='Title' name='title' value={title} onChange={(e)=> setTitle(e.target.value)}/>

     <SunEditor setOptions={{
        buttonList: [
          ['undo', 'redo'],
          ['bold', 'italic', 'underline', 'strike'],
          ['font', 'fontSize', 'formatBlock'],
          ['fontColor', 'hiliteColor', 'align', 'list', 'lineHeight'],
          ['outdent', 'indent'],
          ['table', 'link', 'image', 'video'],
          ['fullScreen', 'showBlocks', 'codeView'],
          ['preview', 'print'],
          ['removeFormat']
        ]
      }}
      
      onChange={handleChange}
      />
      <div className='mt-5'>
      <label for="countries" className="block mb-2 text-sm font-medium text-white">Select an option</label>
  <select id="countries" value={isPublished} onChange={(e)=> setIsPublished(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose any one if you want to publish it</option>
    <option value={true}>yes</option>
    <option value={false}>no</option>

  </select>
      </div>

      <button className='bg-[#f5f5f5] px-3 py-2 text-lg mt-5' type='submit'>Save</button>
     </form>
    </div>
  );
};
export default MyComponent;