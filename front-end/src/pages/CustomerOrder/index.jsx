import React, { useEffect, useState } from 'react';
import { getOrders } from '../../api/order';
import CustomerOrder from '../../components/CustomerOrder';
import NavBar from '../../components/NavBar';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const asyncFunction = async () => {
      const { token, id } = JSON.parse(localStorage.getItem('user'));
      const body = { user_id: id };
      const newOrders = await getOrders({ token, body });
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

export default CustomerOrders;
