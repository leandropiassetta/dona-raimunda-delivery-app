import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const history = useNavigate();
  const logout = () => {
    localStorage.clear();

    history('/login');
  };

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
        { JSON.parse(localStorage.getItem('user')).name }
      </section>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ () => logout() }
      >
        Sair
      </button>
    </nav>
  );
}

export default NavBar;
