/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider, useCart } from './components/CartContext';

function App() {
  // Dummy product data
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 99.99, image: 'https://via.placeholder.com/150' },
  ];

  const { cart, dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-3xl">E-commerce Store</h1>
      </header>
      <main className="py-8">
        <ProductList products={products} addToCart={addToCart} />
        <Cart />
      </main>
    </div>
  );
}

function AppWrapper() {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
}

export default AppWrapper;
