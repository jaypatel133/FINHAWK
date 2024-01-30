import connectMongoDB from "@/libs/mongodb"
import Stock from "@/modules/stock";
import { NextResponse } from "next/server";

export async function POST(request)
{
    const {name} = await request.json()
    await connectMongoDB();
    const out = await Stock.find({name})
    return NextResponse.json({out},{status:201})
}