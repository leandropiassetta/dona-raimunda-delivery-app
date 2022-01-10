import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../slices/productsCart';

function FinalizeOrder() {
  const products = useSelector((state) => state.productsCart.products);
  const sumPrices = products
    .reduce((acc, curr) => (curr.price * curr.quantity) + acc, 0);
  const dispatch = useDispatch();

  return (
    <div>
      Finalizar Pedido
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ name, quantity, price }, index) => (
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
              >
                <button
                  type="button"
                  onClick={ () => dispatch(removeProduct(name)) }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div data-testid="customer_checkout__element-order-total-price">
        Total: R$
        {`${sumPrices.toFixed(2)}`.replace('.', ',')}
      </div>
    </div>
  );
}

export default FinalizeOrder;
