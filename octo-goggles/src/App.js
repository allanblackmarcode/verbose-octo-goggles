import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import ContactUs from './Components/Pages/ContactUs';
import SignUp from './Components/Pages/SignUp';
import Marketing from './Components/Pages/Marketing';
import Consulting from './Components/Pages/Consulting';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/marketing' exact component={Marketing} />
        <Route path='/consulting' exact component={Consulting} />
      </Routes>
    </Router>
  );
}

export default App;
