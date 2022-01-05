import axiosAPI from './request';

export const loginUser = async (user) => {
  try {
    const token = await axiosAPI.post('/users/login', user);
    return token;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const registerUser = async (user) => {
  try {
    const token = await axiosAPI.post('/users/register', user);
    return token;
  } catch (error) {
    return { error: error.response.data.message };
  }
};
