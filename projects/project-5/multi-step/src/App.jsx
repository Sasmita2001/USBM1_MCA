/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Pinformation from "./Pinformation";
import Ainformation from "./Ainformation";
import Review from "./Review";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-3xl font-semibold text-blue-500 mb-4">Multi-Step Form</h1>
          <Routes>
            <Route path="/" element={<Pinformation formData={formData} handleChange={handleChange} />} />
            <Route path="/step2" element={<Ainformation formData={formData} handleChange={handleChange} />} />
            <Route path="/step3" element={<Review formData={formData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
