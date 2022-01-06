import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import CardProduct from '../../components/CardProduct';
import listProducts from '../../api/products';
import { Products } from '../../styles';

function CustomerProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const asyncFunc = async () => {
      const listProd = await listProducts();
      setProducts(listProd);
    };
    asyncFunc();
  }, []);

  return (
    <div className="bg-gray-100">
      <NavBar />
      <Products>
        {products.map((product) => (<CardProduct
          key={ product.id }
          product={ product }
        />))}
      </Products>
    </div>
  );
}

export default CustomerProducts;
