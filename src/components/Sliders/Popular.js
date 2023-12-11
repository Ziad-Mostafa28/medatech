import React, { useState } from 'react';

const ProductCard = () => {
 const [quantity, setQuantity] = useState(1);

 const addToCart = () => {
    // add product to cart logic
 };

 return (
    <div className="bg-white shadow-lg rounded-lg p-4">
    
    <h2 className="text-xl font-semibold mb-2">Product Name</h2>
    <p className="text-gray-500 mb-4">Product Description</p>
    <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
        <button
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity === 1}
            className="px-2 py-1 text-gray-500 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
        >
            -
        </button>
        <span className="text-xl font-semibold">{quantity}</span>
        <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-2 py-1 text-gray-500 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
        >
            +
        </button>
        </div>
        <button
        onClick={addToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
        Add to Cart
        </button>
      </div>
    </div>
 );
};

export default ProductCard;