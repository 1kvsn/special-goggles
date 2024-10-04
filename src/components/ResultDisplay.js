import React from "react";

const ResultDisplay = ({ result }) => {
  function getClassNameForResult() {
    if (result.startsWith("Error")) {
      return "danger";
    }
    return "";
  }

  return <h4 className={getClassNameForResult()}>{result}</h4>;
};

export default ResultDisplay;
