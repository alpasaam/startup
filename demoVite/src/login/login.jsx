import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../login/AuthContext';
import './login.css';

export function Login() {
  const { login, logout } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Perform login logic here
    const success = await login(username, password);
    if (success) {
      navigate('/rewards'); // Redirect to the Rewards page
    } else {
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to the home page after logout
  };

  return (
    <main className="container mt-5">
      <section>
        <form onSubmit={handleLogin} className="form-container">
          <label htmlFor="username">Email:</label>
          <input 
            type="text" 
            className="form-control" 
            id="username" 
            name="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            name="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <br />
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <button onClick={handleLogout} className="btn btn-secondary mt-3">Logout</button>
      </section>
      <footer className="mt-4">
        <p>Don't have an account? <a href="register">Register here</a></p>
      </footer>
    </main>
  );
}