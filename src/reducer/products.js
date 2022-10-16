import { FETCH_PRODUCTS_SUCCES, FETCH_PRODUCTS_FAIL } from "../actions/types";

const initialState = { products: null };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS_SUCCES:
      // console.log({
      //   products: {
      //     data: payload,
      //     error: false,
      //   },
      // });
      return {
        ...state,
        products: {
          data: payload,
          error: false,
        },
      };
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        products: {
          data: null,
          error: true,
        },
      };
    default:
      return state;
  }
}
