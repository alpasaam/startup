import React, { useState } from 'react';
import { useAuth } from '../login/AuthContext';
import './login.css';

export function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    login(username, password); // Update the authentication state with username and password
  };

  return (
    <main className="container mt-5">
      <section>
        <form onSubmit={handleLogin} className="form-container">
          <label htmlFor="username">Username:</label>
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
      </section>
      <footer className="mt-4">
        <p>Don't have an account? <a href="register">Register here</a></p>
      </footer>
    </main>
  );
}