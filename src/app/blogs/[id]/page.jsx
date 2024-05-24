import ErrorToast from "@/components/ErrorToast";
import { prisma } from "@/utils/db";
export default async function page({ params }) {
 
    const [blog] =await prisma.$transaction([
      prisma.blog.findFirst({ where: { id:params.id } }),
      prisma.blog.update({where:{id: params.id},data:{viewCount:{increment:1}}})
    ]).catch((err)=>{
      return <ErrorToast/>
    })
  return (
    <div className="text-white">
      <h1> {blog.title} </h1>
      <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </div>
  );
}
