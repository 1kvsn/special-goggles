import React, { useState, useEffect } from "react";
import { add } from "./add";
import InputField from "./components/Input";
import ResultDisplay from "./components/ResultDisplay";

/**
 * 1. Please note that I have intentionally used React for assignment.
 * 2. If UI & deployment requirement was not present in the assignment, I would have preferred vanilla JS.
 * 3. Since Netlify allows easiest deployment process for React project, I selected React here. I did not want to spend too much time on the assignment and deployment.
 * 4. React is an overkill for these kinds of tasks in my opinion.
 * 5. The invidual component's CSS could be handled in a better way. For example, CSS Modules
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

  function handleCalculate() {
    try {
      // https://stackoverflow.com/a/30811125/10936392
      const sanitisedVal = inputVal.replace("\\n", "\n");

      const sum = add(sanitisedVal);
      setResult(`Result: ${sum}`);
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  }

  function handleKeyUp(e) {
    if (e.key === "Enter") {
      handleCalculate();
    }
  }

  return (
    <div>
      <h1>String Calculator</h1>

      <InputField
        placeholder="Enter numbers..."
        value={inputVal}
        onChange={(value) => setInputVal(value)}
        onKeyUp={handleKeyUp}
      />

      <button onClick={handleCalculate}>Calculate Sum</button>

      <ResultDisplay result={result} />
    </div>
  );
}

export default StringCalculator;
