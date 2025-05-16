import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import StampsPage from './pages/StampsPage';
import CoinsPage from './pages/CoinsPage';
import PostcardsPage from './pages/PostcardsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/stamps" element={<StampsPage />} />
        <Route path="/coins" element={<CoinsPage />} />
        <Route path="/postcards" element={<PostcardsPage />} />
      </Routes>
    </Router>
  );
}

export default App;