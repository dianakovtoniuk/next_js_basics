import prisma from "@/lib/prisma";
import ProductCard from "@/app/components/ProductCard";

interface Props {
    params: Promise<{ slug?: string[] }>;
    searchParams: Promise<{ sortOrder?: string }>;
}

export default async function ProductsPage({ params, searchParams }: Props) {
    const { slug } = await params;
    const { sortOrder } = await searchParams;

    // /products/:id -> show one product
    if (slug && slug.length === 1 && !isNaN(Number(slug[0]))) {
        const product = await prisma.product.findUnique({
            where: { id: Number(slug[0]) },
        });

        if (!product) return <div className="p-8">Product not found.</div>;

        return (
            <div className="p-8 max-w-sm">
                <ProductCard product={product} />
            </div>
        );
    }

    // /products or /products?sortOrder=price -> list
    const products = await prisma.product.findMany({
        orderBy: sortOrder === "price" ? { price: "asc" } : { id: "asc" },
    });

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold mb-6">Products</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
