import { products } from "../services/product";
import { FETCH_PRODUCTS_SUCCES, FETCH_PRODUCTS_FAIL } from "./types";
export const fetchProduct = () => (dispatch) => {
  return products().then(
    (data) => {
      // console.log(data);
      return dispatch({
        type: FETCH_PRODUCTS_SUCCES,
        payload: data,
      });
    },
    (error) => {
      // console.log(error);
      return dispatch({
        type: FETCH_PRODUCTS_FAIL,
      });
    }
  );
};

export const AddProduct = (data) => {
  return { type: "ADD_PRODUCT", payload: data };
};
export const RemoveProduct = () => {
  return { type: "REMOVE_PRODUCT" };
};
