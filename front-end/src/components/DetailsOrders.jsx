import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSellers } from '../api/user';
import createOrder from '../api/order';

function DetailsOrders() {
  const [sellers, setSellers] = useState([]);
  const [seller, setSeller] = useState(0);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const history = useNavigate();
  const products = useSelector((state) => state.productsCart.products);
  const sumPrices = products
    .reduce((acc, curr) => (curr.price * curr.quantity) + acc, 0);

  useEffect(() => {
    const asyncFunction = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const newSellers = await getSellers(token);
      setSellers(newSellers);
      setSeller(newSellers[0].id);
    };
    asyncFunction();
  }, []);

  async function finishOrder() {
    const { id } = JSON.parse(localStorage.getItem('user'));
    const body = {
      user_id: id,
      seller_id: seller,
      status: 'Pendente',
      delivery_address: address,
      delivery_number: number,
      products,
      total_price: sumPrices,
    };
    const order = await createOrder(body);
    history(`/customer/orders/${order.id}`);
  }

  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        <select
          data-testid="customer_checkout__select-seller"
          onChange={ ({ target }) => setSeller(target.value) }
        >
          { sellers.map(({ id, name }, index) => (
            <option key={ index } value={ id }>{ name }</option>
          )) }
        </select>
        <label htmlFor="input-address">
          Endereço
          <input
            type="text"
            id="input-address"
            data-testid="customer_checkout__input-address"
            onChange={ ({ target }) => setAddress(target.value) }
          />
        </label>
        <label htmlFor="input-number">
          Número
          <input
            type="text"
            id="input-number"
            data-testid="customer_checkout__input-addressNumber"
            onChange={ ({ target }) => setNumber(target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ () => finishOrder() }
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}

export default DetailsOrders;
