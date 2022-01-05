import axiosAPI from './request';

export const loginUser = async (user) => {
  try {
    const userData = await axiosAPI.post('/users/login', user);
    return userData;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const registerUser = async (user) => {
  try {
    const userData = await axiosAPI.post('/users/register', user);
    return userData;
  } catch (error) {
    return { error: error.response.data.message };
  }
};
