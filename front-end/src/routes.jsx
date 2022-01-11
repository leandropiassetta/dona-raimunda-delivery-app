import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ClientProducts from './pages/ClientProducts';
import Register from './pages/Register';
import ClientCheckout from './pages/ClientCheckout';
import ClientOrder from './pages/ClientOrder';
import CustomerOrders from './pages/CustomerOrder';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate replace to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/customer/products" element={ <ClientProducts /> } />
        <Route path="/customer/checkout" element={ <ClientCheckout /> } />
        <Route exact path="/customer/orders" element={ <CustomerOrders /> } />
        <Route path="/customer/orders/:id" element={ <ClientOrder /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
