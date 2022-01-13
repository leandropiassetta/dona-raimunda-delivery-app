import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { editOrder } from '../api/order';

const magicNumber = -4;

function ClientOrderDetails({ order }) {
  const [status, setStatus] = useState('Pendente');
  const history = useNavigate();
  const disabledCase = ['Pendente', 'Preparando', 'Entregue'];

  useEffect(() => {
    setStatus(order.status);
  }, [order.status]);

  const handleClick = async (newStatus) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await editOrder(order.id, { status: newStatus }, token);
    setStatus(newStatus);
    history(`/customer/orders/${order.id}`);
  };

  return (
    <section>
      <div
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { `PEDIDO ${(`0000${order.id}`).slice(magicNumber)}` }
      </div>
      <div
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { order.seller.name }
      </div>
      <div
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { moment(order.sale_date).format('DD/MM/YYYY') }
      </div>
      <div
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </div>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled={ disabledCase.includes(status) }
        onClick={ () => handleClick('Entregue') }
      >
        Marcar como entregue
      </button>
    </section>
  );
}

ClientOrderDetails.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string,
    sale_date: PropTypes.string,
    seller: PropTypes.shape({
      name: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};

export default ClientOrderDetails;
