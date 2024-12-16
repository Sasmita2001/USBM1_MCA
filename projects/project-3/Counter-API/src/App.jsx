/* eslint-disable no-unused-vars */

import React from "react";
import { useCounter } from "./CounterContext";

const App = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-72 text-center">
        <h1 className="text-3xl font-semibold text-blue-500 mb-4">Counter App</h1>
        <div className="text-4xl font-bold mb-6">
          <span>{count}</span>
        </div>

        <div className="flex space-x-4 justify-center">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
          >
            Decrement
          </button>
          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none"
          >
            Increment
          </button>
        </div>

        <div className="mt-6">
          <button
            onClick={reset}
            className="w-full py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
