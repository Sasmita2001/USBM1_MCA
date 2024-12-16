/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Pinformation = ({ formData, handleChange }) => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    return errors;
  };

  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      navigate("/step2");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleNext} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
        />
        {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
        />
        {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-1"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
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

export default Pinformation;
