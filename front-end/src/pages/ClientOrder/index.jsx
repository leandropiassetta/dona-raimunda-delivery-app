/* eslint-disable react/jsx-max-depth */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar';
import { getOrderById } from '../../api/order';
import OrderDetails from '../../components/OrderDetails';

function ClientOrder() {
  const [order, setOrder] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const asyncFunc = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const orderId = await getOrderById(id, token);
      setOrder(orderId);
    };
    asyncFunc();
  }, [id]);

  return (

    <div>
      { order && (
        <div>
          <NavBar />
          <div>
            Detalhes do Pedido
            <OrderDetails order={ order } />
            <table>
              <thead>
                <tr>
                  <th>
                    Item
                  </th>
                  <th>
                    Descrição
                  </th>
                  <th>
                    Quantidade
                  </th>
                  <th>
                    Valor Unitário
                  </th>
                  <th>
                    Sub-total
                  </th>
                </tr>
              </thead>
              <tbody>
                {order.products.map(({ name, quantity, price, id: productId }, index) => (
                  <tr key={ index }>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-item-number-${productId}`
                      }
                    >
                      { productId }
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-name-${productId}`
                      }
                    >
                      { name }
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-quantity-${productId}`
                      }
                    >
                      {quantity}
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-unit-price-${productId}`
                      }
                    >
                      { Number(price).toFixed(2).replace('.', ',') }
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-sub-total-${productId}`
                      }
                    >
                      { Number(price * quantity).toFixed(2).replace('.', ',') }
                    </td>
                    <td
                      data-testid={
                        `customer_checkout__element-order-table-remove-${productId}`
                      }
                    />
                  </tr>
                ))}
              </tbody>
            </table>
            <div data-testid="customer_order_details__element-order-total-price">
              { order.total_price.replace('.', ',') }
            </div>
          </div>
        </div>
      ) }
    </div>
  );
}

export default ClientOrder;
