import connectMongoDB from "@/libs/mongodb"
import Stock from "@/modules/stock";
import { NextResponse } from "next/server";

export async function PUT(request)
{
    const {name,rate,pred_rate_con} = await request.json()
    await connectMongoDB();
    await Stock.findOneAndUpdate({name},{rate,pred_rate_con})

    return NextResponse.json({message:"data updeted"},{status:201})
}