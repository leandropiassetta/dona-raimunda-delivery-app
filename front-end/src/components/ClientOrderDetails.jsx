import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

const magicNumber = -4;

function ClientOrderDetails({ order }) {
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
        { order.status }
      </div>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled
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
