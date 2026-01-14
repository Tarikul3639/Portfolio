// import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Observer from './Observer.tsx';
import CustomToastContainer from './components/ui/ToastContainer.jsx';
// import Loader from './components/ui/Loader.jsx';

// const Home = lazy(() => import('./pages/Home.jsx'));
import Home from './pages/Home.jsx';


// Loading component while the main content is being loaded
// const LoadingFallback = () => (
//   <div className="flex items-center justify-center min-h-screen bg-[#111111] overflow-hidden">
//     <Loader loading={true} variant="full" size={50} />
//   </div>
// );


function App() {
  return (
    <Observer>
      <BrowserRouter>
        {/* <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense> */}
        {/* <LoadingFallback /> */}

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
