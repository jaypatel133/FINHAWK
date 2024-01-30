import connectMongoDB from "@/libs/mongodb"
import Scheduler from "@/modules/scheduler";
import { NextResponse } from "next/server";

export async function POST(request)
{
    const {userid} = await request.json()
    await connectMongoDB();
    const output = await Scheduler.find({userid})
    return NextResponse.json({output},{status:201})
}
