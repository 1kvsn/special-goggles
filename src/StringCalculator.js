import React, { useState, useEffect } from "react";
import { add } from "./add";

/**
 * 1. Please note that I have intentionally used React for assignment.
 * 2. If UI & deployment requirement was not present in the assignment, I would have preferred vanilla JS.
 * 3. Since Netlify allows easiest deployment process for React project, I selected React here. I did not want to spend too much time on the assignment and deployment.
 * 4. React is an overkill for these kinds of tasks in my opinion.
 *
 *
 */

function StringCalculator() {
  const [inputVal, setInputVal] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (!inputVal) {
      setResult("");
    }
  }, [inputVal]);

  const handleCalculate = () => {
    try {
      console.log(typeof inputVal);
      const sum = add(inputVal);
      setResult(`Result: ${sum}`);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  function handleKeyUp(e) {
    if (e.key === "Enter") {
      handleCalculate();
    }
  }

  function getClassNameForResult() {
    if (result.startsWith("Error")) {
      return "danger";
    }
    return "";
  }

  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        placeholder="Enter numbers..."
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button onClick={handleCalculate}>Calculate Sum</button>
      <h4 className={getClassNameForResult()}>{result}</h4>
    </div>
  );
}

export default StringCalculator;
