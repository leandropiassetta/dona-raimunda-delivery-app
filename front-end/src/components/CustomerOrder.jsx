import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function CustomerOrder({ order, index }) {
  const history = useNavigate();

  return (
    <button onClick={ () => history(`/customer/orders/${order.id}`) } type="button">
      <div data-testid={ `customer_orders__element-order-id-${order.id}` }>
        Pedido
        { index + 1 }
      </div>
      <div data-testid={ `customer_orders__element-delivery-status-${index}` }>
        { order.status }
      </div>
      <div data-testid={ `customer_orders__element-order-date-${index}` }>
        { order.sale_date }
      </div>
      <div>
        R$
        { order.total_price.replace(('.', ',')) }
      </div>
    </button>
  );
}

CustomerOrder.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    total_price: PropTypes.string,
    sale_date: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CustomerOrder;
