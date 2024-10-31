import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
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
            <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="login.html">Login</a></li>
            <li className="nav-item"><a className="nav-link" href="menu.html">Menu</a></li>
            <li className="nav-item"><a className="nav-link" href="rewards.html">Rewards</a></li>
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
  );
}

export default App;