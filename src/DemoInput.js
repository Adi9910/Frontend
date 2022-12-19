import React, { useState } from "react";

function DemoInput() {
  const [input, setInput] = useState({ fullName: "" });
  const [tableData, setTableData] = useState([]);
  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setInput(newInput);
  };
  const handleClick = (evnt) => {
    evnt.preventDefault();
    const newData = (data) => [
      ...data,
      input
    ];
    setTableData(newData)
  };
  return (
    <>
      <input onChange={handleChange} value={input.fullName} name="fullName" />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
      <th>Name</th>
      {tableData.map((abc) => {
        return (
          <tr>
            <td>{abc.fullName}</td>
          </tr>
        );
      })}
    </>
  );
}
export default DemoInput;
