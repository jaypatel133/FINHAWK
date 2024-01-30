import { NextResponse } from "next/server";
import { NseIndia } from  "stock-nse-india";


export async function GET(request)
{
    const  nseIndia = new  NseIndia()

    const out = await nseIndia.getAllStockSymbols()
    // const out = await nseIndia.getEquityDetails('TATAMOTORS')
    nseIndia.getDataByEndpoint('/api/marketStatus').then(details  => {
        console.log(details)
        })
    return NextResponse.json(out)

}