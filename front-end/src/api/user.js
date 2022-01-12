import axiosAPI from './request';

export const loginUser = async (user) => {
  try {
    const userData = await axiosAPI.post('/users/login', user);
    return userData.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const registerUser = async (user) => {
  try {
    const userData = await axiosAPI.post('/users/register', user);
    return userData.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const getSellers = async (token) => {
  try {
    const dataSellers = await axiosAPI.get('/users/sellers', { headers: {
      authorization: token,
    } });
    return dataSellers.data;
  } catch (error) {
    return { error };
  }
};
