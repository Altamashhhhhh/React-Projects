import React, { useEffect, useRef, useState } from 'react';
import "./App.css";

const App = () => {
  // State to manage error messages
  const [error, setError] = useState(null);

  // State to manage whether the "VERIFY" button should be enabled
  const [enableBtn, setEnableBtn] = useState(false);

  // State to store the entered OTP, initially filled with empty strings
  const [inputArr, setInputArr] = useState(Array(6).fill(""));

  // Refs for each input field to programmatically manage focus and value
  const inputField = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  // Effect to remove the error message after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null); // Clear the error after 3 seconds
      }, 3000);
      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [error]);

  // Focus on the first input field when the component mounts
  useEffect(() => {
    inputField[0].current.focus();
  }, []);

  // Function to check if all input fields are filled and enable the button
  function checkAllFilled(updatedValue) {
    const allFilled = updatedValue.every(value => value.length === 1); // Check if every input has 1 character
    setEnableBtn(allFilled); // Enable button if all fields are filled
  }

  // Handle input change for each field
  function handleChange(e, index) {
    const value = e.target.value; // Get the value entered by the user

    // Update the inputArr with the new value at the current index
    let updatedValue = [...inputArr];
    updatedValue[index] = value;
    setInputArr(updatedValue); // Update the state

    checkAllFilled(updatedValue); // Check if all inputs are filled

    // If a single digit is entered and the current index isn't the last, move focus to the next input
    if (value.length === 1 && index < inputField.length - 1) {
      inputField[index + 1].current.focus();
      setError(null); // Clear any previous error
    }
  }

  // Handle backspace keypress to move focus to the previous input field
  function handleKeyPressed(e, index) {
    if (e.key === "Backspace" && index > 0 && !inputField[index].current.value) {
      inputField[index - 1].current.focus(); // Focus on the previous input field

      // Update the input array and check if all fields are filled
      let updatedValue = [...inputArr];
      updatedValue[index] = inputField[index].current.value || '';
      checkAllFilled(updatedValue);
    }
  }

  // Handle paste event to allow pasting a 6-digit OTP
  function handlePaste(e) {
    // Get the pasted data and ensure it is 6 digits
    const pasteData = e.clipboardData.getData("Text").slice(0, 6);
    if (!/^\d{6}$/.test(pasteData)) {
      setError("Paste only 6 digits");
      return;
    }

    // Split the pasted data and update the input fields
    pasteData.split("").forEach((char, index) => {
      inputArr[index] = char; // Update input array
      inputField[index].current.value = char; // Update actual input field value
    });

    setInputArr([...inputArr]); // Update the input array state
    inputField[inputField.length - 1].current.focus(); // Focus on the last input field
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload

    const otp = inputArr.join(""); // Join the input array into a single OTP string
    alert(`Entered Otp is ${otp}`); // Show an alert with the entered OTP

    // Clear the input fields after submitting the OTP
    setInputArr(Array(6).fill("")); // Reset input array to empty values
    inputField.forEach(ref => {
      ref.current.value = ""; // Clear the actual input fields
    });

    // Set focus back to the first input field
    inputField[0].current.focus();
  }
 

  return (
    <div className='container'>
      <h1>Enter Verification Code</h1>
      <form className='otp-box' onSubmit={handleSubmit} >
        <div className='otp-input' onPaste={handlePaste}>
          {inputField.map((item, index) => {
            return (
              <input
                type="text"
                key={index}
                placeholder='0'
                onKeyDown={(e) => handleKeyPressed(e, index)}
                onChange={(e) => handleChange(e, index)}
                ref={item}
                maxLength={1}
                required
              />
            );
          })}
        </div>
        <button type="submit" disabled={!enableBtn}>VERIFY</button>
        <p style={{ color: "red" }}>{error && error}</p>
      </form>
    </div>
  );
}

export default App;
