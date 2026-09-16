'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    const { status, data: session } = useSession();

    return (
        <div className="flex items-center bg-zinc-100 dark:bg-zinc-900 p-3 gap-4 text-sm">
            <Link href="/" className="font-semibold mr-4">Next.js</Link>
            <Link href="/users">Users</Link>
            <Link href="/products">Products</Link>
            <Link href="/upload">Upload</Link>
            {session?.user?.isAdmin && <Link href="/admin">Admin</Link>}
            <div className="ml-auto">
                {status === 'authenticated' && (
                    <div className="flex items-center gap-3">
                        <span>{session.user?.name ?? session.user?.email}</span>
                        <Link href="/api/auth/signout">Sign Out</Link>
                    </div>
                )}
                {status === 'unauthenticated' && <Link href="/auth/signin">Sign In</Link>}
            </div>
        </div>
    );
};

export default NavBar;
