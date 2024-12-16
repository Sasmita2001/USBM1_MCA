// const calculateBMI = () => {
//   const height = document.getElementById(`height`).value;
//   const weight = document.getElementById(`weight`).value;
//   const bmi = weight / (height * height);

//   output = bmi.toFixed(2);
// };

// let button = document.getElementById("btn");

// button.addEventListener("click", () => {
//   const height = parseFloat(document.getElementById("height").value);
//   const weight = parseFloat(document.getElementById("weight").value);
//   const result = document.getElementById("output");
//   let height_status = false,
//     weight_status = false;

//   if (height == "" || isNaN(height) || height <= 0) {
//     document.getElementById("height_error").innerHTML = "Enter a valid height ";
//   } else {
//     document.getElementById("height_error").innerHTML = "";
//     height_status = true;
//   }

//   if (weight === "" || isNaN(weight) || weight <= 0) {
//     document.getElementById("weight_error").innerHTML = "Enter a valid weight ";
//   } else {
//     document.getElementById("weight_error").innerHTML = "";
//     weight_status = true;
//   }

//   if (height_status && weight_status) {
//     const bmi = weight / (height * height).toFixed(2);

//     if (bmi < 18.6) {
//       result.innerHTML = "under weight:" + bmi;
//     } else if (bmi >= 18.6 && bmi < 24.6) {
//       result.innerHTML = "Normal :" + bmi;
//     } else {
//       result.innerHTML = "over weight:" + bmi;
//     }
//   } else {
//     alert("The form has error");
//     result.innerHTML = "";
//   }
// });

// let button = document.getElementById("btn");

// button.addEventListener("click", () => {
//   const height = parseFloat(document.getElementById("height").value);
//   const weight = parseFloat(document.getElementById("weight").value);
//   const result = document.getElementById("output");
//   let height_status = false,
//     weight_status = false;

//   // Validate height input
//   if (isNaN(height) || height <= 0) {
//     document.getElementById("height_error").innerHTML = "Enter a valid height";
//   } else {
//     document.getElementById("height_error").innerHTML = "";
//     height_status = true;
//   }

//   // Validate weight input
//   if (isNaN(weight) || weight <= 0) {
//     document.getElementById("weight_error").innerHTML = "Enter a valid weight";
//   } else {
//     document.getElementById("weight_error").innerHTML = "";
//     weight_status = true;
//   }

//   // Calculate and display BMI if inputs are valid
//   if (height_status && weight_status) {
//     const bmi = weight / (height * height);
//     const bmiFixed = bmi.toFixed(2);

//     if (bmi < 18.6) {
//       result.innerHTML = "Underweight: " + bmiFixed;
//     } else if (bmi >= 18.6 && bmi < 24.6) {
//       result.innerHTML = "Normal: " + bmiFixed;
//     } else {
//       result.innerHTML = "Overweight: " + bmiFixed;
//     }
//   } else {
//     alert("The form has errors");
//     result.innerHTML = "";
//   }
// });

// let button = document.getElementById("btn");

// button.addEventListener("click", () => {
//   const height = parseFloat(document.getElementById("height").value);
//   const weight = parseFloat(document.getElementById("weight").value);
//   const result = document.getElementById("output");
//   let height_status = false,
//     weight_status = false;

//   // Clear previous error messages
//   document.getElementById("height_error").innerHTML = "";
//   document.getElementById("weight_error").innerHTML = "";
//   result.innerHTML = "";

//   // Validate height input
//   if (isNaN(height) || height <= 0) {
//     document.getElementById("height_error").innerHTML = "Enter a valid height";
//   } else {
//     height_status = true;
//   }

//   // Validate weight input
//   if (isNaN(weight) || weight <= 0) {
//     document.getElementById("weight_error").innerHTML = "Enter a valid weight";
//   } else {
//     weight_status = true;
//   }

//   // Calculate and display BMI if inputs are valid
//   if (height_status && weight_status) {
//     const bmi = weight / (height * height);
//     const bmiFixed = bmi.toFixed(2);

//     if (bmi < 18.6) {
//       result.innerHTML = "Underweight: " + bmiFixed;
//     } else if (bmi >= 18.6 && bmi < 24.6) {
//       result.innerHTML = "Normal: " + bmiFixed;
//     } else {
//       result.innerHTML = "Overweight: " + bmiFixed;
//     }
//   } else {
//     alert("The form has errors");
//   }
// });

const calculateBMI = () => {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const bmi = weight / (height * height);
  const output = bmi.toFixed(2);
  let resultMessage = " ";
  if (bmi < 18.5) {
    resultMessage = `Your BMI is ${output}. You are underweight.`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultMessage = `Your BMI is ${output}. You have a normal weight.`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    resultMessage = `Your BMI is ${output}. You are overweight.`;
  } else {
    resultMessage = `Your BMI is ${output}. This Calculator is not for You🙏`;
  }

  document.getElementById("result").textContent = resultMessage;
};
