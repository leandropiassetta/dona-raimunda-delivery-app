/* eslint-disable react/jsx-max-depth */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
// import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar';
import { getOrderById } from '../../api/order';

function ClientOrder() {
  const [order, setOrder] = useState(false);

  // const sumPrices = products
  //   .reduce((acc, curr) => (curr.price * curr.quantity) + acc, 0);

  useEffect(() => {
    const asyncFunc = async () => {
      const { token, id } = JSON.parse(localStorage.getItem('user'));
      const orderId = await getOrderById(id, token);
      setOrder(orderId);
    };
    asyncFunc();
  }, []);

  return (

    <div>
      { order && (
        <div>
          <NavBar />
          <div>
            Detalhes do Pedido
            <section>
              <div
                data-testid="customer_order_details__element-order-details-label-order-id"
              >
                { `PEDIDO 000${order.seller_id}` }
              </div>
              <div
                data-testid="customer_order_details__
                element-order-details-label-seller-name"
              >
                { order.seller.name }
              </div>
              <div
                data-testid="customer_order_details__
                element-order-details-label-order-date"
              >
                { moment(order.sale_date).format('L') }
              </div>
              <div
                data-testid="customer_order_details__element-order-details-
            label-delivery-status"
              >
                { order.status }
              </div>
              <button
                type="button"
                data-testid="customer_order_details__button-delivery-check"
              >
                Marcar como entregue
              </button>
            </section>
            <table>
              <thead>
                <tr>
                  <th
                    data-testid="customer_order_details__element-order-table-item-number-
                <index>"
                  >
                    Item
                  </th>
                  <th
                    data-testid="customer_order_details__element-order-table-name-<index>"
                  >
                    Descrição
                  </th>
                  <th
                    data-testid="customer_order_details__element-order-table-quantity-
                    <index>"
                  >
                    Quantidade
                  </th>
                  <th
                    data-testid="customer_order_details__element-order-table-sub-total-
                <index>"
                  >
                    Valor Unitário
                  </th>
                  <th
                    data-testid="customer_order_details__element-order-total-price-
                  <index>"
                  >
                    Sub-total
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* {products.map(({ name, quantity, price }, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  { index + 1 }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${index}`
                  }
                >
                  { name }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  {quantity}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  { Number(price).toFixed(2).replace('.', ',') }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { Number(price * quantity).toFixed(2).replace('.', ',') }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                />
              </tr>
            ))} */}
              </tbody>
            </table>
            <div data-testid="customer_checkout__element-order-total-price">
              Total: R$
              {/* {`${sumPrices.toFixed(2)}`.replace('.', ',')} */}
            </div>
          </div>
        </div>
      ) }
    </div>
  );
}

export default ClientOrder;
