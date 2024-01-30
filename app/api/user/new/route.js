import connectMongoDB from "@/libs/mongodb"
import User from "@/modules/users";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export async function POST(request)
{
    let {name,email,password} = await request.json()
    await connectMongoDB();
    // let status = 201
    const hash = await bcrypt.hash(password, 10)
    try{
        const res = await User.create({name,email,password: hash})
    }catch(e)
    {
        console.log(e)
        return NextResponse.json({message:"added"},{status:409})
    }
    console.log('added')
    return NextResponse.json({message:"added"},{status:201})
}
