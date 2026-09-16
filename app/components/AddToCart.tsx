'use client';
import React from 'react';

interface Props {
    productId: number;
}

const AddToCart = ({ productId }: Props) => {
    return (
        <button
            className="rounded bg-black text-white px-3 py-1.5 text-sm"
            onClick={() => console.log('Added product', productId, 'to cart')}
        >
            Add to Cart
        </button>
    );
};

export default AddToCart;
