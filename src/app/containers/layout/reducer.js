import { 
	FETCH_DATA,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_ERROR,
} from './constants';

const initialState = {
  error: '',
  searchData: '',
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
	case FETCH_DATA:
      return {
        ...state,
     };
	case FETCH_DATA_SUCCESS:
      return {
        ...state,
        searchData: action.data.records
     };
	case FETCH_DATA_ERROR:
      return {
        ...state,
        error: 'Some error occured, please contact our customer spport'
     };
    default:
      return state;
  }
}
