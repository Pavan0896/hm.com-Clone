import { AUTH, DETAILS, ERROR, FETCH, SUCCESS } from "./actionTypes";

const initState = { data: [], loading: false, error: false, details: {} };

const prodReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH:
      return { ...state, loading: true, data: [] };
    case SUCCESS:
      return { ...state, data: action.payload, loading: false, details: {} };
    case DETAILS:
      return { ...state, details: action.payload, loading: false };
    case ERROR:
      return { ...state, error: true, loading: false };
    default:
      return state;
  }
};

const authReducer = (state = { auth: false }, action) => {
  switch (action.type) {
    case AUTH:
      return { ...state, auth: action.payload };
    default:
      return state;
  }
};

export { prodReducer, authReducer };
