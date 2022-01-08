import axiosAPI from './request';

async function createOrder({ token, body }) {
  try {
    const order = await axiosAPI.post(
      '/orders',
      body,
      {
        headers: {
          authorization: token,
        },
      },
    );
    console.log(order.data);
    return order.data;
  } catch (error) {
    return { error };
  }
}

export default createOrder;
