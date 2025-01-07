import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

// Acción para obtener los destinos
export const fetchDestinations = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/destinations`);
	console.log('Destinations fetched:', response.data);
    dispatch({ type: 'SET_DESTINATIONS', payload: response.data });
  } catch (error) {
    console.error('Error fetching destinations', error);
  }
};

export const createDestination = (name, country, description) => async (dispatch) => {
  const response = await axios.post(`${apiUrl}/destination`, {
    name,
    country,
    description,
  });

  dispatch({ type: 'ADD_DESTINATION', payload: response.data });
};

export const deleteDestination = (id) => async (dispatch) => {
  await axios.delete(`${apiUrl}/destination/${id}`);
  dispatch({ type: 'DELETE_DESTINATION', payload: id });
};

export const updateDestination = (id, name, country, description) => async (dispatch) => {
  await axios.put(`${apiUrl}/destination/${id}`, {
    name,
    country,
    description,
  });

  dispatch({
    type: 'UPDATE_DESTINATION',
    payload: { id, name, country, description },
  });
};


