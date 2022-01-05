import axiosAPI from './request';

export const loginUser = async (user) => {
  try {
    const token = await axiosAPI.post('/login', user);
    return token;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const registerUser = async (user) => {
  try {
    const token = await axiosAPI.post('/register', user);
    return token;
  } catch (error) {
    return { error: error.response.data.message };
  }
};
