import prisma from "@/lib/prisma";

export default async function AdminPage() {
    const [userCount, productCount] = await Promise.all([
        prisma.user.count(),
        prisma.product.count(),
    ]);

    return (
        <div className="flex gap-6">
            <div className="border rounded p-4">
                <p className="text-3xl font-semibold">{userCount}</p>
                <p className="text-zinc-500 text-sm">Users</p>
            </div>
            <div className="border rounded p-4">
                <p className="text-3xl font-semibold">{productCount}</p>
                <p className="text-zinc-500 text-sm">Products</p>
            </div>
        </div>
    );
}
