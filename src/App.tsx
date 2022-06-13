import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Grid from './pages/grid/Grid';
import Login from './pages/Login/Login';
import Register from './pages/register/Register';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="signin" element={<Register/>}></Route>
        <Route path="grid" element={<Grid/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
