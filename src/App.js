import React, { useState } from "react";
function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}
function App() {
  const inputProps = useInput();
  return (
    <div className="wow">
      <input {...inputProps} placeholder="Type in here" />
      <div>Value: {inputProps.value} </div>
    </div>
  );
}
export default App;
