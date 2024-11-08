import React, { useState } from 'react';
import { useAuth } from '../login/AuthContext';
import './register.css';

export function Register() {
  const { register } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform register logic here
    register(username, password, email); // Update the authentication state with username, password, and email
  };

  return (
    <main className="container mt-5">
      <section>
        <form onSubmit={handleRegister} className="form-container">
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
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <br />
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
      </section>
      <footer className="mt-4">
        <p>Already have an account? <a href="login">Login here</a></p>
      </footer>
    </main>
  );
}