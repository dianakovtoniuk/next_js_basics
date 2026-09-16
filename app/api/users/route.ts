import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {

    const users = await prisma.users.findMany();

    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.message, { status: 400 });
    }

    const user = await prisma.users.create({
        data: {
            name: body.name,
        }
    });

    return NextResponse.json(user, { status: 201 });
}