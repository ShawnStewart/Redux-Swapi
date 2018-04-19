import {
  FETCHING_CHARS,
  ERROR_FETCHING_CHARS,
  CHARS_FETCHED
} from '../actions';

const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  error: null,
  fetching: false,
  fetched: false
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_CHARS:
      return Object.assign({}, state, { fetching: true });
    case ERROR_FETCHING_CHARS:
    return Object.assign({}, state, { error: action.payload, fetching: false });
    case CHARS_FETCHED:
    return Object.assign({}, state, { chars: [...state.chars, ...action.payload], fetching: false, fetched: true });
    default:
      return state;
  }
};
