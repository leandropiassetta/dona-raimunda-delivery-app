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

export async function getOrderById(id) {
  try {
    const orderById = await axiosAPI.get(`/orders/${id}`);
    return orderById.data;
  } catch (error) {
    return { error };
  }
}
