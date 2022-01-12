import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

const magicNumber = -4;

function SellerOrderDetails({ order }) {
  const [status, setStatus] = useState('Pendente');
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
        { order.status }
      </div>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
      >
        Preparando pedido
      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
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
