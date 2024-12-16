/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const Review = ({ formData }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("Form Submitted!");

    navigate("/");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Review and Submit</h2>
      <div>
        <strong>First Name: </strong>{formData.firstName}
      </div>
      <div>
        <strong>Last Name: </strong>{formData.lastName}
      </div>
      <div>
        <strong>Email: </strong>{formData.email}
      </div>
      <div>
        <strong>Street: </strong>{formData.street}
      </div>
      <div>
        <strong>City: </strong>{formData.city}
      </div>
      <div>
        <strong>Zip Code: </strong>{formData.zipCode}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600"
      >
        Submit
      </button>
    </div>
  );
};

export default Review;
