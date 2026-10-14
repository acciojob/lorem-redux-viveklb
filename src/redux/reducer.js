import {
  FETCH_LOREM_FAILURE,
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
} from "./actions";

const initialState = {
  loading: true,
  error: null,
  content: null,
};

const loremReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_LOREM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        content: action.payload,
      };
    case FETCH_LOREM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loremReducer;
