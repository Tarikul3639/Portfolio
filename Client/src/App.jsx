import React from 'react';
import LandingPage from './pages/LandingPage.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ObserverProvider from '../ObserverProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ObserverProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </ObserverProvider>
  );
}

export default App;
