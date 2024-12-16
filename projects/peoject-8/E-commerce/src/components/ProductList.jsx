/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-md" />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-700 mb-2">${product.price}</p>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
