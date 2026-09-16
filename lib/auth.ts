import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email as string },
                });

                if (!user || !user.hashedPassword) return null;

                const passwordsMatch = await bcrypt.compare(
                    credentials.password as string,
                    user.hashedPassword
                );

                if (!passwordsMatch) return null;

                return {
                    id: String(user.id),
                    email: user.email,
                    name: user.name,
                    isAdmin: user.isAdmin,
                };
            },
        }),
    ],
    session: { strategy: "jwt" },
    pages: { signIn: "/auth/signin" },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.isAdmin = user.isAdmin;
            return token;
        },
        async session({ session, token }) {
            if (session.user) session.user.isAdmin = token.isAdmin as boolean;
            return session;
        },
    },
});
