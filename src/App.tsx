import React from 'react';
import './styles/global.scss';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages';

function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
