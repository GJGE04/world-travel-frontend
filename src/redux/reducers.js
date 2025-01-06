const initialState = {
  destinations: [],
};

const destinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DESTINATIONS':
      return { ...state, destinations: action.payload };
	case 'ADD_DESTINATION':
      return { ...state, destinations: [...state.destinations, action.payload] };
	case 'DELETE_DESTINATION':
		return {
			...state,
			destinations: state.destinations.filter(destination => destination.id !== action.payload)
		};
	case 'UPDATE_DESTINATION':
	  return {
		...state,
		destinations: state.destinations.map(destination =>
		  destination.id === action.payload.id
			? { ...destination, ...action.payload }
			: destination
		),
	};

    default:
      return state;
  }
};

export default destinationReducer;
