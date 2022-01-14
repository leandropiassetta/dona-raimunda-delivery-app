import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import moment from 'moment';
// import { editOrder } from '../api/order';
import socketClient from '../socket/socketClient';

const magicNumber = -4;

function SellerOrderDetails({ order }) {
  const transit = 'Em Trânsito';
  const [status, setStatus] = useState(transit);
  const disabledPreparingCase = ['Preparando', transit, 'Entregue'];
  const disabledTransitCase = ['Pendente', transit, 'Entregue'];
  useEffect(() => {
    setStatus(order.status);
  }, [order.status]);
  const handleClick = async (newStatus) => {
    // const { token } = JSON.parse(localStorage.getItem('user'));
    // await editOrder(order.id, { status: newStatus }, token);
    await socketClient.emit('status', { id: order.id, status: newStatus });
    setStatus(newStatus);
  };

  useEffect(() => {
    socketClient.on('status', ({ id, status: orderStatus }) => {
      if (id === order.id) {
        setStatus(orderStatus);
      }
    });
  }, []);

  return (
    <section>
      <div
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        { `PEDIDO ${(`0000${order.id}`).slice(magicNumber)}` }
      </div>
      <div
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { moment(order.sale_date).format('DD/MM/YYYY') }
      </div>
      <div
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </div>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        disabled={ disabledPreparingCase.includes(status) }
        onClick={ () => handleClick('Preparando') }
      >
        Preparando pedido
      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        disabled={ disabledTransitCase.includes(status) }
        onClick={ () => handleClick(transit) }
      >
        Saiu para entrega
      </button>
    </section>
  );
}

SellerOrderDetails.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string,
    sale_date: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default SellerOrderDetails;
