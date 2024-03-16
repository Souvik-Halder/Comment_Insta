import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Verify from './pages/Verify';
import CommentPage from './pages/CommentPage';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='bg-[#EE7D51] h-full w-full'>
      <Toaster />
      <Router>
        <Routes>
          <Route path='/' element={<Verify />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/comment' element={<CommentPage />} />
        </Routes>
      </Router>
    </div>
  );
  return;
}

export default App;
