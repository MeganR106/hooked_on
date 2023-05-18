import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import Patterns from './Patterns'
import SquareCalculator from './SquareCalculator'
import YarnCalculator from './YarnCalculator'
import HomePage from './Home'


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/patterns" element={<Patterns />} />
            <Route path="/squarecalc" element={<SquareCalculator />} />
            <Route path="/yarncalc" element={<YarnCalculator />} />
          </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
