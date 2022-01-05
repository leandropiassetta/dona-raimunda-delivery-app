import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ClientProducts from './pages/ClientProducts';
import Register from './pages/Register';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate replace to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/customer/products" element={ <ClientProducts /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
