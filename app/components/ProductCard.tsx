import React from 'react';
import AddToCart from './AddToCart';

interface Props {
    product: {
        id: number;
        name: string;
        price: number;
    };
}

const ProductCard = ({ product }: Props) => {
    return (
        <div className="border rounded p-4 flex flex-col gap-2">
            <p className="font-medium">{product.name}</p>
            <p className="text-zinc-600">${product.price.toFixed(2)}</p>
            <AddToCart productId={product.id} />
        </div>
    );
};

export default ProductCard;
