import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ClientProducts from './pages/clientProducts';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigate replace to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/customer/products" element={ <ClientProducts /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
