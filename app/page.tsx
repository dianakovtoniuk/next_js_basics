import Link from "next/link";

export default function Home() {
    return (
        <div className="p-8 flex flex-col gap-6">
            <h1 className="text-3xl font-semibold">Next.js course project</h1>
            <p className="text-zinc-600 max-w-md">
                A small full-stack app: users and products backed by Prisma/Postgres,
                image upload via Cloudinary, and credentials-based auth.
            </p>
            <div className="flex gap-4">
                <Link href="/users" className="rounded bg-black text-white px-4 py-2 text-sm">
                    Users
                </Link>
                <Link href="/products" className="rounded bg-black text-white px-4 py-2 text-sm">
                    Products
                </Link>
                <Link href="/upload" className="rounded border px-4 py-2 text-sm">
                    Upload
                </Link>
            </div>
        </div>
    );
}
