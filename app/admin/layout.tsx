import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="p-8">
            <h1 className="text-xl font-semibold mb-4">Admin</h1>
            {children}
        </div>
    );
}
