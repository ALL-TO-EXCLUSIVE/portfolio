import { prisma } from "@/utils/db"
import ApiErrorResponse from "@/utils/errorResponse"
import ApiResponse from "@/utils/response"

export async function POST(req,res) {
    const {content, title, isPublished,slug}  =await req.json()
    const slugLow = slug.toLowerCase()
    const createdBlog = await prisma.blog.create({data:{
        title:title,
        content: content,
        published:Boolean(isPublished),
        slug:slugLow
    }})

    if(!createdBlog){
        return ApiErrorResponse(false,"error while creating blog",500)
    }

    return ApiResponse(true,"blog saved successfully",200)
  }

export async function GET(){
    const res = await prisma.blog.findMany({where:{published:true}})
    
    if(!res || res== null){
        return ApiErrorResponse(false,"blogs not found",404)
    }else if (res.length == 0){
        return ApiResponse(true,"no blogs available",200,res)
    }

    return ApiResponse(true,"blogs fetched successfully",200,res)
}