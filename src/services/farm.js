import api from '../utils/api';

// create new farm by user
export const createFarm = async (data) => {
  const response = await api.post('/farm', data);

  return response.data;
};

// get all user farms
export const userFarms = async () => {
  const response = await api.get('/farm');

  return response.data;
};

//get farm by id param
export const getFarm = async (id) => {
  const response = await api.get(`/farm/${id}`);

  return response.data;
};

// delete farm by owner
export const deleteFarm = async (id) => {
  const response = await api.delete(`/farm/${id}`);

  return response.data;
};

//update farm detals by owner
export const updateFarm = async (id, data) => {
  const response = await api.patch(`/farm/${id}`, data);

  return response.data;
};
