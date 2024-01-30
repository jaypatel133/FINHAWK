import connectMongoDB from "@/libs/mongodb"
import User from "@/modules/users";
import { NextResponse } from "next/server";

export async function PUT(request)
{
    const {email,password} = await request.json()
    await connectMongoDB();
    await User.findOneAndUpdate({email},{password})

    return NextResponse.json({message:"data updeted"},{status:201})
}