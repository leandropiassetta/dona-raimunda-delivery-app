import axiosAPI from './request';

export async function createOrder({ token, body }) {
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

    return order.data;
  } catch (error) {
    return { error };
  }
}

export async function getOrderById(id, token) {
  try {
    const orderById = await axiosAPI.get(`/orders/${id}`,
      {
        headers: {
          authorization: token,
        },
      });
    console.log(orderById.data);
    return orderById.data;
  } catch (error) {
    return { error };
  }
}
