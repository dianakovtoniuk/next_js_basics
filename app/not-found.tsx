import Link from "next/link";

export default function NotFound() {
    return (
        <div className="p-8">
            <h2 className="text-xl font-semibold mb-2">Page not found</h2>
            <Link href="/" className="underline">Go home</Link>
        </div>
    );
}
