import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import socketClient from '../socket/socketClient';

function CustomerOrder({ order }) {
  const [status, setStatus] = useState(order.status);
  const history = useNavigate();
  const { role } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    socketClient.on('status', ({ id, status: orderStatus }) => {
      if (id === order.id) {
        setStatus(orderStatus);
      }
    });
  }, []);

  return (
    <button onClick={ () => history(`/${role}/orders/${order.id}`) } type="button">
      <div data-testid={ `${role}_orders__element-order-id-${order.id}` }>
        { order.id }
      </div>
      <div data-testid={ `${role}_orders__element-delivery-status-${order.id}` }>
        { status }
      </div>
      <div data-testid={ `${role}_orders__element-order-date-${order.id}` }>
        { moment(order.sale_date).format('DD/MM/YYYY') }
      </div>
      <div data-testid={ `${role}_orders__element-card-price-${order.id}` }>
        { order.total_price.replace('.', ',') }
      </div>
      <div data-testid={ `${role}_orders__element-card-address-${order.id}` }>
        { `${order.delivery_address}, ${order.delivery_number}` }
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
    delivery_address: PropTypes.string,
    delivery_number: PropTypes.string,
  }).isRequired,
};

export default CustomerOrder;
