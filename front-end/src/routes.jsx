import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ClientProducts from './pages/ClientProducts';
import Register from './pages/Register';
import ClientCheckout from './pages/ClientCheckout';
import OrderDetails from './pages/OrderDetails';
import Orders from './pages/Orders';
import Admin from './pages/Admin';

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate replace to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/customer/products" element={ <ClientProducts /> } />
        <Route path="/customer/checkout" element={ <ClientCheckout /> } />
        <Route exact path="/customer/orders" element={ <Orders /> } />
        <Route exact path="/seller/orders" element={ <Orders /> } />
        <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
        <Route path="/seller/orders/:id" element={ <OrderDetails /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/admin/manage" element={ <Admin /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
