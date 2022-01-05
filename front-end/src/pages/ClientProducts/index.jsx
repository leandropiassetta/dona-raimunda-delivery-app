import React from 'react';
import NavBar from '../../components/NavBar';
import CardProduct from '../../components/CardProduct';

function customerProducts() {
  const listProduct = [
    { id: 1, name: 'joao', price: 19, image: 'oi' },
    { id: 2, name: 'joao', price: 19, image: 'oi' },
    { id: 3, name: 'joao', price: 19, image: 'oi' },
    { id: 4, name: 'joao', price: 19, image: 'oi' },
    { id: 5, name: 'joao', price: 19, image: 'oi' },
    { id: 6, name: 'joao', price: 19, image: 'oi' },
    { id: 7, name: 'joao', price: 19, image: 'oi' },
    { id: 8, name: 'joao', price: 19, image: 'oi' },
    { id: 9, name: 'joao', price: 19, image: 'oi' },
    { id: 10, name: 'joao', price: 19, image: 'oi' },
    { id: 11, name: 'joao', price: 19, image: 'oi' },
  ];

  return (
    <div>
      <NavBar />
      {listProduct.map((product) => (<CardProduct
        key={ product.id }
        product={ product }
      />))}
    </div>
  );
}

export default customerProducts;
