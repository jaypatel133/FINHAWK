import connectMongoDB from "@/libs/mongodb"
import User from "@/modules/users";
import { NextResponse } from "next/server";

export async function GET(request)
{   
    const {email} = request.json()
    await connectMongoDB();
    const output = await User.findOne({email})

    return NextResponse.json({output})
}
