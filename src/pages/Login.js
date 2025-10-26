import { useState } from 'react';
import axios from 'axios';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password
      });
      login(res.data); // Save user & token to context/localStorage
      setMessage('Login successful!');
      navigate('/'); // Redirect home or to dashboard
    } catch (err) {
      setMessage('Login failed');
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={e => setUsername(e.target.value)}
        /><br/>
        <input 
          type="password" 
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        /><br/>
        <button type="submit" className="contact-middle-btn" style={{marginTop: '22px'}}>
  Login
</button>

      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;
