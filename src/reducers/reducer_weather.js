import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_WEATHER:
			// CANNOT simply do state.push to add the action.payload.data
			// we never manipulate state directly
			// return state.concat([action.payload.data]);
			
			// ES6 syntax
			return [ action.payload.data, ...state ];
			break;

	}
	return state;
}


