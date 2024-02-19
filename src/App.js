import React, {useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import Index from './main/index';



function App() {

  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Index />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
