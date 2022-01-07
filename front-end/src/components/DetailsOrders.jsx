import React from 'react';

function DetailsOrders() {
  return (
    <div>
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        <select data-testid="customer_checkout__select-seller">
          <option>TESTE 123</option>
        </select>
        <label htmlFor="input-address">
          Endereço
          <input
            type="text"
            id="input-address"
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="input-number">
          Número
          <input
            type="text"
            id="input-number"
            data-testid="customer_checkout__input-addressNumber"
          />
        </label>
        <button type="button" data-testid="customer_checkout__button-submit-order">
          FINALIZAR PEDIDO
        </button>
      </form>
    </div>
  );
}

export default DetailsOrders;
