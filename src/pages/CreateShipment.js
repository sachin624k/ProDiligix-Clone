import { useState } from 'react';
import axios from 'axios';

function CreateShipment() {
  const [form, setForm] = useState({
    trackingNumber: '',
    origin: '',
    destination: '',
    expectedDelivery: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5050/api/shipment', form);
      setMessage('Shipment created!');
    } catch (err) {
      setMessage('Failed to create');
    }
  };

  return (
    <div>
      <h2>Create Shipment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="trackingNumber" placeholder="Tracking Number" onChange={handleChange} /><br/>
        <input type="text" name="origin" placeholder="Origin" onChange={handleChange} /><br/>
        <input type="text" name="destination" placeholder="Destination" onChange={handleChange} /><br/>
        <input type="date" name="expectedDelivery" onChange={handleChange} /><br/>
        <button type="submit">Create</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
export default CreateShipment;
