import { FETCH_WEATHER } from '../actions/index';

// we do not want to mutate state; the ES6 syntax uses the spread operator
// we took an existing array and flattened it out to make a new one
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


