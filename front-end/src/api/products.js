import axiosAPI from './request';

const listProducts = async () => {
  try {
    const productsData = await axiosAPI.get('/products');
    return productsData.data;
  } catch (error) {
    return error;
  }
};

export default listProducts;
