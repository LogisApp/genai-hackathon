import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const lica = axios.create({
    baseURL: 'https://api.lica.world/api/v1',
    headers: {
        'Content-Type': 'application/json',
        //TODO: put this in a .env file
        'x-api-key': 'V13zIObBTTXemLCPhOMvt5ZnULi4jRlE',
    },
})
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function getResult(request_id: string) {
    console.log(request_id)
    try {
        const response = await lica.get(`/ml-requests/${request_id}`)
        const result = await response.data
        console.log(result)
        if (result?.data?.status === 'failed')
            throw new Error(result.data.error)
        else if (result?.data?.status === 'completed')
            return result.data.response.images
        else {
            await wait(500)
            return getResult(request_id)
        }
    } catch (e) {
        console.log(e)
        return null
    }
}

export async function GET(req: NextRequest, res: NextResponse) {
    const request_id = req.nextUrl.searchParams.get('request_id')
    const result = await getResult(request_id as string)
    if (result) {
        return Response.json(result)
    } else {
        return Response.json({ error: 'Request not found' })
    }
}