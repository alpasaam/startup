import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './login/login';
import { Login } from './play/play';
import { Menu } from './scores/scores';
import { Rewards } from './about/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <header className="text-center">
        <h1>兄弟火锅 - Brothers HotPot</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><NavLink className="nav-link" to='home'>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='login'>Login</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='menu'>Menu</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to='rewards'>Rewards</NavLink></li>
          </ul>
        </div>
      </nav>
      <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'white' }}>
        <p>Username: <span id="username">User123</span></p>
      </div>
      <main>
        <p></p>
      </main>
    </div>
    </BrowserRouter>
  );
}