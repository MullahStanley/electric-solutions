import React, { useState, useEffect } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    load: '',
    load_power: '',
    quantity_of_load: '',
    total_power: '',
    number_of_running_hours: '',
    total_energy: ''
  });

  useEffect(() => {
    // Fetch data from JSON file
    fetch('http://localhost:3000/loads')
      .then(response => response.json())
      .then(data => setFormData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update data in JSON file
    fetch('http://localhost:3000/loads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => console.log('Data updated successfully:', data))
      .catch(error => console.error('Error updating data:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Load:
        <input
          type="text"
          name="load"
          value={formData.load}
          onChange={handleChange}
        />
      </label>
      <label>
        Load Power:
        <input
          type="text"
          name="load_power"
          value={formData.load_power}
          onChange={handleChange}
        />
      </label>
      <label>
        Quantity of Load:
        <input
          type="text"
          name="quantity_of_load"
          value={formData.quantity_of_load}
          onChange={handleChange}
        />
      </label>
      <label>
        Total Power:
        <input
          type="text"
          name="total_power"
          value={formData.total_power}
          onChange={handleChange}
        />
      </label>
      <label>
        Number of Running Hours:
        <input
          type="text"
          name="number_of_running_hours"
          value={formData.number_of_running_hours}
          onChange={handleChange}
        />
      </label>
      <label>
        Total Energy:
        <input
          type="text"
          name="total_energy"
          value={formData.total_energy}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
