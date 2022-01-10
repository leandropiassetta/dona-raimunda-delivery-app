import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ProductCard, ProductImg } from '../styles';
import { setQuantity, addProduct } from '../slices/productsCart';

function CardProduct({ product }) {
  const [quantity, setNewQuantity] = useState(0);
  const products = useSelector((state) => state.productsCart.products);
  const existProduct = products.find((element) => product.name === element.name);
  const dispatch = useDispatch();

  const increment = () => {
    setNewQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setNewQuantity(quantity - 1);
    }
  };

  const changeQuantity = ({ target }) => {
    setNewQuantity(Number(target.value));
  };

  useEffect(() => {
    if (existProduct) {
      setNewQuantity(existProduct.quantity);
    }
  }, [existProduct]);

  useEffect(() => {
    if (existProduct) return dispatch(setQuantity({ name: product.name, quantity }));
    if (quantity !== 0) {
      dispatch(addProduct({ ...product, quantity }));
    }
    // eslint-disable-next-line
  }, [quantity]);

  return (
    <ProductCard>
      <ProductImg>
        <img
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          src={ product.url_image }
          alt={ product.name }
          className="h-full"
        />
      </ProductImg>
      <p
        data-testid={ `customer_products__element-card-title-${product.id}` }
        className="text-center m-2"
      >
        {product.name}
      </p>
      <div className="flex justify-evenly m-2">
        <p
          data-testid={ `customer_products__element-card-price-${product.id}` }
        >
          R$
          {' '}
          { product.price.replace('.', ',') }
        </p>
        <div className="bg-white px-1 rounded-lg">
          <button
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            type="button"
            onClick={ () => decrement() }
          >
            -
          </button>
          <input
            type="text"
            value={ quantity }
            onChange={ (e) => changeQuantity(e) }
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            className="text-center w-10 mx-2"
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            type="button"
            onClick={ () => increment() }
          >
            +
          </button>
        </div>

      </div>
    </ProductCard>
  );
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    url_image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardProduct;
