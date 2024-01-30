import connectMongoDB from "@/libs/mongodb"
import Scheduler from "@/modules/scheduler";
import { NextResponse } from "next/server";

export async function POST(request)
{
    const {userid,stockid,type,rate,pred_rate_con} = await request.json()
    await connectMongoDB();
    await Scheduler.create({userid,stockid,type,rate, pred_rate_con})
    return NextResponse.json({message:"data added"},{status:201})
}