import React, { useEffect, useState } from 'react';
import { getOrders } from '../../api/order';
import CustomerOrder from '../../components/CustomerOrder';
import NavBar from '../../components/NavBar';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const asyncFunction = async () => {
      const { token, id, role } = JSON.parse(localStorage.getItem('user'));
      const search = (role === 'customer') ? `user_id=${id}` : `seller_id=${id}`;
      const newOrders = await getOrders({ token, search });
      console.log(newOrders);
      setOrders(newOrders);
    };
    asyncFunction();
  }, []);

  return (
    <div>
      <NavBar />
      { orders.map((order, index) => (<CustomerOrder
        order={ order }
        index={ index }
        key={ index }
      />)) }
    </div>
  );
}

export default Orders;
