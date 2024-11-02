import React from 'react';
import './register.css';

export function Register() {
    return (
        <main class="container mt-5">
        <section>
            <form action="register_process.php" method="post" class="form-container">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" name="name" required>
                <br></br>
                </input>
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" name="email" required>
                </input>
                <br></br>
        
                <label for="username">Username:</label>
                <input type="text" class="form-control" id="username" name="username" required>
                </input>
                <br></br>
        
                <label for="password">Password:</label>
                <input type="password" class="form-control" id="password" name="password" required>
                </input>
                <br></br>
        
                <input type="submit" class="btn btn-primary" value="Register"></input>
            </form>
        </section>
        
        <footer>
            <p>Already have an account? <a href="login.html">Login here</a></p>
        </footer>
    </main>
    );
  }