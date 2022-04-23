import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Information from './pages/Information';
import Reservations from './pages/Reservations';
import Singles from './pages/Singles';
import Staff from './pages/Staff';
import Tournaments from './pages/Tournaments';
import cursedtennis from './images/tenniscourt.webp';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/information' element={Information} />
        <Route path='/reservations' element={Reservations} />
        <Route path='/singles' element={Singles} />
        <Route path='/staff' element={Staff} />
        <Route path='/tournaments' element={Tournaments} />
      </Routes>

      <div>
        <h1 align='center'>‎</h1>
        <h1 align='center'> Welcome to Lakewood Tennis Center ! </h1>
        <p1 align='center'>
            Lakewood Tennis Center supplies many things such as tennis balls for playing 
            tennis and tennis courts that are rented out for playing tennis and instructors that teach you how to play tennis.
            Legend has it the Lakewood Tennis Center is located in Lakewood, California. Feel free to explore this website to find
            more information such as hours, information about staff, ongoing events, and make a reservation!
            Don't let your dreams be dreams go out and play some tennis. 🎾
        </p1>
        <h1 align='center'>‎</h1>
        <img className="photo"  src={cursedtennis}></img>
      </div>

    </Router>
  );
}

export default App;
