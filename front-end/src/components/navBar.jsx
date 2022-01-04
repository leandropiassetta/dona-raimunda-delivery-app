import React from 'react';

function navBar() {
  return (
    <nav>
      <section
        data-testid="customer_products__element-navbar-link-products"
      >
        PRODUTOS
      </section>
      <section
        data-testid="customer_products__element-navbar-link-orders"
      >
        MEUS PEDIDOS
      </section>
      <section
        data-testid="customer_products__element-navbar-user-full-name"
      >
        NOME
      </section>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
      >
        Sair
      </button>
    </nav>
  );
}

export default navBar;
