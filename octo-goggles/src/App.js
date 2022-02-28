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
        <Route path='/' exact element={ <Home/> } />
        <Route path='/services' exact element={ <Services/> } />
        <Route path='/products' exact element={ <Products/> } />
        <Route path='/contact-us' exact element={ <ContactUs/> } />
        <Route path='/sign-up' exact element={ <SignUp/> } />
        <Route path='/marketing' exact element={ <Marketing/> } />
        <Route path='/consulting' exact element={ <Consulting/> } />
      </Routes>
    </Router>
  );
}

export default App;
