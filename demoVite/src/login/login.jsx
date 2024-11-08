import React from 'react';
import './login.css';

export function Login() {
    return (
        <main className="container mt-5">
        <section>
            <form action="login_process.php" method="post" className="form-container">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" name="username" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" required></input>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </section>
        
        <footer className="mt-4">
            <p>Don't have an account? <a href="register">Register here</a></p>
            
        </footer>
    </main>
    );

  }