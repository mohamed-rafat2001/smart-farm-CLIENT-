import api from '../utils/api';

// get user by add id
export const getUserById = async (id) => {
  const response = await api.post(`/user`, id);

  return response.data;
};

// get user by id params
export const userByIdParam = async (id) => {
  const response = await api.get(`/user/${id}`);

  return response.data;
};
// get user profile
export const userData = async () => {
  const response = await api.get('/user');

  return response.data;
};

// delete user by him self
export const deleteMyAccount = async () => {
  const response = await api.delete('/user');

  return response.data;
};

// update my account data

export const updateMyAccData = async (data) => {
  const response = await api.patch('/user', data);

  return response.data;
};
