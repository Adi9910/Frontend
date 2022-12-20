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
    const newData = (data) => [...data, input];
    setTableData(newData);
    alert(`${input.fullName} added to list successfully`);
  };
  return (
    <>
      <input onChange={handleChange} value={input.fullName} name="fullName" />
      <button type="submit" className="btn-btn-primary" onClick={handleClick}>
        Submit
      </button>
      <th>#</th>
      <th>Name</th>
      {tableData.map((abc, i) => {
        return (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{abc.fullName}</td>
          </tr>
        );
      })}
    </>
  );
}
export default DemoInput;
