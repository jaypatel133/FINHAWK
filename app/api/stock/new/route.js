import connectMongoDB from "@/libs/mongodb"
import Stock from "@/modules/stock";
import { NextResponse } from "next/server";

export async function POST(request)
{
    const {name,rate,pred_rate_con} = await request.json()
    await connectMongoDB();
    await Stock.create({name,rate,pred_rate_con})
    return NextResponse.json({message:"data added"},{status:201})
}