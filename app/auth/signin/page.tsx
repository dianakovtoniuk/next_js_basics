'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const res = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError('Invalid email or password');
            return;
        }

        router.push('/');
        router.refresh();
    };

    return (
        <div className="p-8 max-w-md">
            <h1 className="text-2xl font-semibold mb-6">Sign in</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    className="border rounded px-3 py-2"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="border rounded px-3 py-2"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="rounded bg-black text-white px-4 py-2 text-sm"
                >
                    Sign in
                </button>
            </form>
        </div>
    );
}
