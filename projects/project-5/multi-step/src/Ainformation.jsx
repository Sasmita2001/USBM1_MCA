/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Ainformation = ({ formData, handleChange }) => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};
    if (!formData.street) errors.street = "Street address is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.zipCode) errors.zipCode = "Zip Code is required";
    return errors;
  };

  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      navigate("/step3");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleNext} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold">Street Address</label>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
        />
        {errors.street && <p className="text-red-500 text-xs">{errors.street}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
        />
        {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold">Zip Code</label>
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
        />
        {errors.zipCode && <p className="text-red-500 text-xs">{errors.zipCode}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
      >
        Next
      </button>
    </form>
  );
};

export default Ainformation;
