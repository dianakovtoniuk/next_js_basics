'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewUserPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email }),
        });

        if (!res.ok) {
            const message = await res.json();
            setError(typeof message === "string" ? message : "Could not create user");
            return;
        }

        router.push("/users");
        router.refresh();
    };

    return (
        <div className="p-8 max-w-md">
            <h1 className="text-2xl font-semibold mb-6">New user</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    className="border rounded px-3 py-2"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="border rounded px-3 py-2"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="rounded bg-black text-white px-4 py-2 text-sm"
                >
                    Create
                </button>
            </form>
        </div>
    );
}
