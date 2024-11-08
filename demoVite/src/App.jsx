import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Login from './login/login';
import Menu from './menu/menu';
import Rewards from './rewards/rewards';
import Register from './register/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <BrowserRouter>
      <div className={`body bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
        <header className='container-fluid'>
          <div className='name display-4'>Brothers Hotpot</div>
          <nav className='navbar'>
            <div className='navbar-brand d-flex align-items-center'>
              {/* <img src='/public/logo.png' alt='Brothers Hotpot Logo' className='logo' style={{ width: '50px', height: '47px', marginRight: '10px' }} /> */}
            </div>
            <ul className='navbar-nav d-flex flex-row'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='login'>
                  Login
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='menu'>
                  Menu
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='rewards'>
                  Rewards
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='register'>
                  Register
                </NavLink>
              </li>
            </ul>
          </nav>
          <button onClick={toggleTheme} className='btn btn-secondary'>
            Toggle Theme
          </button>
        </header>

        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/login' element={<Login />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/rewards' element={<Rewards />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>2024 Saam and Josh(s)</span>
            <a className='text-reset' href='https://github.com/alpasaam/startup'>
              Source
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}