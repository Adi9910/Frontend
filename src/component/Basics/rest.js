import React from "react";
const data = [
  { name: 'Anom', age: 19, gender: 'Male' },
  { name: 'Aditya', age: 19, gender: 'Male' },
  { name: 'Sara', age: 25, gender: 'female' },
];
const Rest = () => {
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {data.map((val) => {
          return (
            <tr>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
export default Rest;
