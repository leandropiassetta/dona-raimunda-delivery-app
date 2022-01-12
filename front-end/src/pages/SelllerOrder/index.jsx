import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import ProductsTable from '../../components/ProductsTable';
import { getOrderById } from '../../api/order';
import SellerOrderDetails from '../../components/SellerOrderDetails';

function ClientOrder() {
  const [order, setOrder] = useState(false);
  const { id } = useParams();
  const { role: customer, token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const asyncFunc = async () => {
      const requiredOrder = await getOrderById(id, token);
      setOrder(requiredOrder);
    };
    asyncFunc();
  }, [id, token]);

  return (

    <div>
      { order && (
        <div>
          <NavBar />
          Detalhes do Pedido
          <SellerOrderDetails order={ order } />
          <ProductsTable products={ order.products } role={ customer } />
          <div data-testid="customer_order_details__element-order-total-price">
            { order.total_price.replace('.', ',') }
          </div>
        </div>
      ) }
    </div>
  );
}

export default ClientOrder;
