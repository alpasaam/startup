import React from 'react';
import './login.css';

export function Login() {
    return (
        <main class="container mt-5">
        <section>
            <form action="login_process.php" method="post" class="form-container">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" class="form-control" id="username" name="username" required></input>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" id="password" name="password" required></input>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </section>
        
        <footer class="mt-4">
            <p>Don't have an account? <a href="register.html">Register here</a></p>
        </footer>
    </main>
    );
  }