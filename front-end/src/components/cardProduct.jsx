import React from 'react';

function cardProduct({ product }) {
  return (
    <section>
      <p
        data-testid={ `customer_products__element-card-price-${product.id}` }
      >
        { product.price }
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.image }
        alt={ product.name }
      />
      <p data-testid={ `customer_products__element-card-title-${product.id}` }>
        {product.name}
      </p>
      <button
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        type="button"
      >
        -
      </button>
      <input
        type="text"
        value={ 0 }
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
        type="button"
      >
        +
      </button>
    </section>
  );
}

export default cardProduct;
