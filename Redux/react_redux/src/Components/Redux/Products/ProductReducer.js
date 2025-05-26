import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductsType";

const initialState = {
  loading: false,
  products: [],
  error: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading : false
      };
    default:
      return state;
  }
};


export default productReducer;