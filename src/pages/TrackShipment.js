import { useState } from 'react';
import axios from 'axios';

function TrackShipment() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [result, setResult] = useState('');

  const handleTrack = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:5000/api/shipment/${trackingNumber}`);
      setResult(JSON.stringify(res.data, null, 2));
    } catch (err) {
      setResult('Shipment not found');
    }
  }

  return (
    <div>
      <h2>Track Shipment</h2>
      <form onSubmit={handleTrack}>
        <input 
          type="text" 
          placeholder="Tracking Number"
          value={trackingNumber}
          onChange={e => setTrackingNumber(e.target.value)}
        /><br/>
        <button type="submit">Track</button>
      </form>
      <pre>{result}</pre>
    </div>
  );
}

export default TrackShipment;
