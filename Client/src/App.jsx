import React from 'react';
import LandingPage from './pages/LandingPage.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ObserverProvider from '../ObserverProvider';
function App() {
  return (
    <ObserverProvider> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
    </ObserverProvider>
  )
}

export default App
