import React, { useState, useEffect } from 'react';

function DataTable() {
  const [loads, setData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    fetch('http://localhost:3000/loads')
      .then(response => response.json())
      .then(loads => setData(loads))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Load</th>
          <th>Load Power</th>
          <th>Quantity of Load</th>
          <th>Total Power</th>
          <th>Number of Running Hours</th>
          <th>Total Energy</th>
        </tr>
      </thead>
      <tbody>
        {loads.map((loads, index) => (
          <tr key={index}>
            <td>{loads.load}</td>
            <td>{loads.load_power}</td>
            <td>{loads.quantity_of_load}</td>
            <td>{loads.total_power}</td>
            <td>{loads.number_of_running_hours}</td>
            <td>{loads.total_energy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
