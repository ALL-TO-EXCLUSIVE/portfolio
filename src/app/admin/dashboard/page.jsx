import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(() => import('@/components/WriteBlog'), { ssr: false });
const page = () => {

  return (
    <div >
      <RichTextEditor />
    </div>
  )
}

export default page