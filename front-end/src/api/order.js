import axiosAPI from './request';

export const createOrder = async ({ token, body }) => {
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
};

export async function getOrderById(id, token) {
  try {
    const orderById = await axiosAPI.get(`/orders/${id}`,
      {
        headers: {
          authorization: token,
        },
      });
    return orderById.data;
  } catch (error) {
    return { error };
  }
}

export const getOrders = async ({ token, search }) => {
  try {
    const order = await axiosAPI.get(
      `/orders/search?${search}`,
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
};

export async function editOrder(id, body, token) {
  try {
    const orderById = await axiosAPI.put(
      `/orders/${id}`,
      body,
      {
        headers: {
          authorization: token,
        },
      },
    );
    return orderById.data;
  } catch (error) {
    return { error };
  }
}
