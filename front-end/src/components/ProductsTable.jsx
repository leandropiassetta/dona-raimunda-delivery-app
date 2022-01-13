import PropTypes from 'prop-types';
import React from 'react';

function ProductsTable({ products, role }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </tr>
      </thead>
      <tbody>
        {products.map(({ name, quantity, price, id: productId }, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `${role}_checkout__element-order-table-item-number-${productId}`
              }
            >
              { productId }
            </td>
            <td
              data-testid={
                `${role}_checkout__element-order-table-name-${productId}`
              }
            >
              { name }
            </td>
            <td
              data-testid={
                `${role}_checkout__element-order-table-quantity-${productId}`
              }
            >
              { quantity }
            </td>
            <td
              data-testid={
                `${role}_checkout__element-order-table-unit-price-${productId}`
              }
            >
              { Number(price).toFixed(2).replace('.', ',') }
            </td>
            <td
              data-testid={
                `${role}_checkout__element-order-table-sub-total-${productId}`
              }
            >
              { Number(price * quantity).toFixed(2).replace('.', ',') }
            </td>
            {
              (role === 'customer') && (
                <td
                  data-testid={
                    `${role}_checkout__element-order-table-remove-${productId}`
                  }
                />
              )
            }
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  role: PropTypes.string.isRequired,
};

export default ProductsTable;
