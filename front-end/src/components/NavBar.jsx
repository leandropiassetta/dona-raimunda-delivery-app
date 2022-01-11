import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import rockGlass from '../images/rockGlass.svg';
import { NavBtn, Nav, Section } from '../styles';
import { setProducts } from '../slices/productsCart';

function NavBar() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const logout = () => {
    localStorage.clear();
    history('/login');
    dispatch(setProducts([]));
  };

  return (
    <Nav>
      <Section>
        <object className="w-12" type="image/svg+xml" data={ rockGlass }>
          Glass
        </object>
        <NavBtn
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => history('/customer/products') }
        >
          PRODUTOS
        </NavBtn>
      </Section>
      <Section>
        <NavBtn
          data-testid="customer_products__element-navbar-user-full-name"
          className="m-1"
        >
          { JSON.parse(localStorage.getItem('user')).name }
        </NavBtn>
        <NavBtn
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => history('/customer/orders') }
        >
          MEUS PEDIDOS
        </NavBtn>
        <NavBtn
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ () => logout() }
        >
          SAIR
        </NavBtn>
      </Section>
    </Nav>
  );
}

export default NavBar;
