import axios from "axios";
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./ProductsType";

export const fetch_Request = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetch_success = (produts) => {
  return {
    type: FETCH_SUCCESS,
    payload: produts,
  };
};
export const fetch_error = (err) => {
  return {
    type: FETCH_ERROR,
    payload: err,
  };
};

export function fetchProduts() {
  return (dispatch) => {
    dispatch(fetch_Request());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const produts = res.data;
        console.log(produts);
        dispatch(fetch_success(produts))
      })
      .catch((err) => {
        const errMessages = err.message;
        dispatch(fetch_error(errMessages))
      });
  };
}
