import React from 'react';
import LandingPage from './pages/LandingPage.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
