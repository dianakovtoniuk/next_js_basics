'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="p-8">
            <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
            <p className="text-zinc-500 mb-4">{error.message}</p>
            <button
                className="rounded bg-black text-white px-4 py-2 text-sm"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    );
}
