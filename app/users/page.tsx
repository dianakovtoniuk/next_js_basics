import Link from "next/link";
import UserTable from "@/app/components/UserTable";

export default function UsersPage() {
    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold">Users</h1>
                <Link
                    href="/users/new"
                    className="rounded bg-black text-white px-4 py-2 text-sm"
                >
                    New user
                </Link>
            </div>
            <UserTable />
        </div>
    );
}
