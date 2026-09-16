import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json(
        [
            { 
                id: 1,
                name: "Banana",
                price: 3.5
            },
            { 
                id: 2,
                name: "Bread",
                price: 1.25
            },
            { 
                id: 3,
                name: "Milk",
                price: 2.25
            },
            { 
                id: 4,
                name: "Meat",
                price: 5.5
            },
            { 
                id: 5,
                name: "Cheese",
                price: 4.5
            },
        ]
    )
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success) {
        return NextResponse.json(validation.error.message, {status: 400});
    }

    return NextResponse.json({id: 10, name: body.name, price: body.price}, {status: 201})
}


export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success) {
        return NextResponse.json(validation.error.message, {status: 400});
    }

    return NextResponse.json({id: params.id, name: body.name, price: body.price})
}

export function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    return NextResponse.json({id: params.id})
}