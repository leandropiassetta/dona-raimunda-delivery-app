import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ButtonCheckout() {
  const [totalValue, setTotalValue] = useState(0);
  const products = useSelector((state) => state.productsCard.products);
  const history = useNavigate();

  useEffect(() => {
    const sumPrices = products
      .reduce((acc, curr) => (curr.price * curr.quantity) + acc, 0);
    setTotalValue(sumPrices);
  }, [products]);

  return (
    <button
      type="button"
      data-testid="customer_products__button-cart"
      className="absolute bottom-0 right-0"
      onClick={ () => history('/customer/checkout') }
      disabled={ totalValue === 0 }
    >
      <p data-testid="customer_products__checkout-bottom-value">
        Ver Carrinho: R$
        { `${totalValue.toFixed(2)}`.replace('.', ',') }
      </p>
    </button>
  );
}

export default ButtonCheckout;
