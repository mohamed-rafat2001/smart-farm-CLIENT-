import api from '../utils/api';

// create new response
export const signUp = async (data) => {
  const response = await api.post('/auth/signUp', data);

  return response.data;
};

// response login func
export const login = async (data) => {
  const response = await api.post('/auth/login', data);

  return response.data;
};

// forget password
export const forgotPassword = async (data) => {
  const response = await api.post('/auth/forgotPassword', data);

  return response.data;
};

// reset password
export const resetPassword = async (token, data) => {
  const response = await api.post(`/auth/resetPassword/${token}`, data);

  return response.data;
};

// update password
export const updatePassword = async (data) => {
  const response = await api.patch('/auth/updatePassword', data);

  return response.data;
};
