import axiosAPI from './request';

async function createOrder({ token, body }) {
  try {
    const order = await axiosAPI.post('/orders', { headers: {
      authorization: token,
    },
    body });
    return order.data;
  } catch (error) {
    return { error };
  }
}

export default createOrder;
