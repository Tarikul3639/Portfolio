import React from 'react';
import LandingPage from './pages/LandingPage.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ObserverProvider from '../ObserverProvider';
import CustomToastContainer  from './components/ui/ToastContainer.jsx';

function App() {
  return (
    <ObserverProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
      <CustomToastContainer />
    </ObserverProvider>
  );
}

export default App;
