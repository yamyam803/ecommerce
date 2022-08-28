import { FETCH_PRODUCTS_SUCCES, FETCH_PRODUCTS_FAIL } from "../actions/types";

const initialState = { products: [] };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS_SUCCES:
      //   console.log({ ...state, isLoggedIn: true, user: payload.user });

      console.log("payload", payload);
      return {
        ...state,
        products: Object.values(payload.products),
        // isLoggedIn: true,
        // user: payload.user,
      };
    case FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        // isLoggedIn: false,
        // user: null,
      };
    default:
      return state;
  }
}
