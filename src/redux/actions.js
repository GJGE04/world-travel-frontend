import axios from 'axios';

// Acción para obtener los destinos
export const fetchDestinations = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/destinations');
	console.log('Destinations fetched:', response.data);
    dispatch({ type: 'SET_DESTINATIONS', payload: response.data });
  } catch (error) {
    console.error('Error fetching destinations', error);
  }
};

export const createDestination = (name, country, description) => async (dispatch) => {
  const response = await axios.post('http://localhost:5000/destination', {
    name,
    country,
    description,
  });

  dispatch({ type: 'ADD_DESTINATION', payload: response.data });
};

export const deleteDestination = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/destination/${id}`);
  dispatch({ type: 'DELETE_DESTINATION', payload: id });
};

export const updateDestination = (id, name, country, description) => async (dispatch) => {
  await axios.put(`http://localhost:5000/destination/${id}`, {
    name,
    country,
    description,
  });

  dispatch({
    type: 'UPDATE_DESTINATION',
    payload: { id, name, country, description },
  });
};


