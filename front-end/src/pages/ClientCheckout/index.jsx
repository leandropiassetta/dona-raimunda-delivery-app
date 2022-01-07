import React from 'react';
import NavBar from '../../components/NavBar';
import FinalizeOrder from '../../components/FinalizeOrder';
import DetailsOrders from '../../components/DetailsOrders';

function ClientCheckout() {
  return (
    <div>
      <NavBar />
      <FinalizeOrder />
      <DetailsOrders />
    </div>
  );
}

export default ClientCheckout;
