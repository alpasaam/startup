import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './home/home';
import { Login } from './login/login';
import { Menu } from './menu/menu';
import { Rewards } from './menu/menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
export default function App() {
  return (
    <BrowserRouter>
    <div className='body bg-dark text-light'>
      <header className='container-fluid'>
	<nav className='navbar fixed-top navbar-dark'>
	  <div className='navbar-brand'>
	    Simon<sup>&reg;</sup>
	  </div>
	  <menu className='navbar-nav'>
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
	  </menu>
	</nav>
      </header>

      <Routes>
	<Route path='/' element={<Home />} exact />
	<Route path='/login' element={<Login />} />
	<Route path='/menu' element={<Menu />} />
	<Route path='/rewards' element={<Rewards />} />
	<Route path='*' element={<NotFound />} />
      </Routes>

      <footer className='bg-dark text-white-50'>
        <div className='container-fluid'>
          <span className='text-reset'>Author Name(s)</span>
          <a className='text-reset' href='https://github.com/webprogramming260/simon-react'>
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