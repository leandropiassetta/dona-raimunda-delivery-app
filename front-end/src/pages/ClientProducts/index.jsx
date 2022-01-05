import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import CardProduct from '../../components/CardProduct';
import listProducts from '../../api/products';

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
    <div>
      <NavBar />
      {products.map((product) => (<CardProduct
        key={ product.id }
        product={ product }
      />))}
    </div>
  );
}

export default CustomerProducts;
