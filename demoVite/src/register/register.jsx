import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Perform register logic here
    const response = await fetch('/api/auth/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      // Handle successful registration (e.g., store token, redirect to login or rewards page)
      console.log('Registration successful:', data);
      navigate('/login'); // Redirect to the login page
    } else {
      // Handle registration error
      const errorData = await response.json();
      console.error('Registration failed:', errorData);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <main className="container mt-5">
      <section>
        <form onSubmit={handleRegister} className="form-container">
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
          
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
      </section>
      <footer className="mt-4">
        <p>Already have an account? <a href="login">Login here</a></p>
      </footer>
    </main>
  );
}