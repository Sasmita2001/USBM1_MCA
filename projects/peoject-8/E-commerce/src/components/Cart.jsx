/* eslint-disable no-unused-vars */
import React from 'react';
import { useCart } from '../components/CartContext';

function Cart() {
  const { cart, dispatch } = useCart();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-sm">
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-700">${item.price}</p>
                </div>
                <button 
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between">
            <h3 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
