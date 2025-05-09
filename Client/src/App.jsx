import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Observer from './Observer.tsx';
import Home from './pages/Home.jsx';
import CustomToastContainer from './components/ui/ToastContainer.jsx';

function App() {
  return (
    <Observer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <CustomToastContainer />
      </BrowserRouter>
    </Observer>
  );
}

export default App;
