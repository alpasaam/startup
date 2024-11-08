import React from 'react';
import { useAuth } from '../login/AuthContext';
import './login.css';

export function Login() {
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    login(); // Update the authentication state
  };

  return (
    <main className="container mt-5">
      <section>
        <form onSubmit={handleLogin} className="form-container">
          <label htmlFor="username">Username:</label>
          <input type="text" className="form-control" id="username" name="username" required />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password" name="password" required />
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