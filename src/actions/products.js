import { products } from "../services/product";
import { FETCH_PRODUCTS_SUCCES, FETCH_PRODUCTS_FAIL } from "./types";
export const fetchProduct = () => (dispatch) => {
  return products().then(
    (data) => {
      //   console.log(data);
      dispatch({
        type: FETCH_PRODUCTS_SUCCES,
        payload: { products: data },
      });

      return Promise.resolve();
    },
    (error) => {
      console.log(error);
      dispatch({
        type: FETCH_PRODUCTS_FAIL,
      });

      return Promise.reject();
    }
  );
};
