import React from 'react';
import './register.css';

export function Register() {
    return (
        <main className="container mt-5">
            <section>
                <form action="register_process.php" method="post" className="form-container">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" required />
                    <br />
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" name="username" required />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" required />
                    <br />
                    <input type="submit" className="btn btn-primary" value="Register" />
                </form>
            </section>
            <footer>
                <p>Already have an account? <a href="login">Login here</a></p>
            </footer>
        </main>
    );
  }