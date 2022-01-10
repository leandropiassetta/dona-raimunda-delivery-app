import React from 'react';
import NavBar from '../../components/NavBar';
import listProducts from '../../api/products';

function ClientOrder() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const asyncFunc = async () => {
      const listProd = await listProducts();
      setProducts(listProd);
    };
    asyncFunc();
  }, []);

  return (
    <div>
      <NavBar />
      <div>
      Detalhes do Pedido
      <section>
        <div data-testid="customer_order_details__element-order-details-label-order-id">Pedido</div>
        <div data-testid="customer_order_details__element-order-details-label-seller-name">Vendedor</div>
        <div data-testid="customer_order_details__element-order-details-label-order-date">data</div>
        <div data-testid="customer_order_details__element-order-details-label-delivery-status">status</div>
        <button type="button" data-testid="customer_order_details__button-delivery-check">Marcar como entregue</button>
      </section>
      <table>
        <thead>
          <tr>
            <th data-testid="customer_order_details__element-order-table-item-number-<index>">Item</th>
            <th data-testid="customer_order_details__element-order-table-name-<index>">Descrição</th>
            <th data-testid="customer_order_details__element-order-table-quantity-<index>">Quantidade</th>
            <th data-testid="customer_order_details__element-order-table-sub-total-<index>">Valor Unitário</th>
            <th data-testid="customer_order_details__element-order-total-price-<index>">Sub-total</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ name, quantity, price }, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                { name }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                {quantity}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { Number(price).toFixed(2).replace('.', ',') }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                { Number(price * quantity).toFixed(2).replace('.', ',') }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                }
              >
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div data-testid="customer_checkout__element-order-total-price">
        Total: R$
        {`${sumPrices.toFixed(2)}`.replace('.', ',')}
      </div>
    </div>
    </div>

  );
}

export default ClientOrder;
