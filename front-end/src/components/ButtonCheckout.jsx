import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CartButton } from '../styles';

function ButtonCheckout() {
  const products = useSelector((state) => state.productsCart.products);
  const history = useNavigate();
  const sumPrices = products
    .reduce((acc, curr) => (curr.price * curr.quantity) + acc, 0);

  return (
    <CartButton
      type="button"
      data-testid="customer_products__button-cart"
      className=""
      onClick={ () => history('/customer/checkout') }
      disabled={ sumPrices === 0 }
    >
      <p data-testid="customer_products__checkout-bottom-value">
        Ver Carrinho: R$
        { `${sumPrices.toFixed(2)}`.replace('.', ',') }
      </p>
    </CartButton>
  );
}

export default ButtonCheckout;
