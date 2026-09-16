import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
import { Resend } from "resend";
import prisma from "@/lib/prisma";
import WelcomeTemplate from "@/emails/WelcomeTemplate";

const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(5),
});

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.message, { status: 400 });

    const existing = await prisma.user.findUnique({ where: { email: body.email } });
    if (existing)
        return NextResponse.json({ error: "User already exists" }, { status: 400 });

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            hashedPassword,
        },
    });

    // Email sending is optional — skipped silently if RESEND_API_KEY isn't set.
    if (resend) {
        try {
            await resend.emails.send({
                from: "onboarding@resend.dev",
                to: newUser.email,
                subject: "Welcome!",
                react: WelcomeTemplate({ name: newUser.name }),
            });
        } catch (err) {
            console.error("Could not send welcome email:", err);
        }
    }

    return NextResponse.json({ email: newUser.email }, { status: 201 });
}
