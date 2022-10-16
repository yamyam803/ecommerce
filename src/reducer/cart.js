import { FETCH_PRODUCTS_SUCCES, FETCH_PRODUCTS_FAIL } from "../actions/types";

const initialState = { cart: [] };

const cart = [];
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      if (state.cart.length) {
        state.cart.map((i) => {
          if (i.id === payload.id) {
            i.qty++;
            return i;
          }
        });
      } else {
        state.cart.push({ ...payload, qty: 1 });
      }
      console.log("state", state);
      return { ...state };
    default:
      return state;
  }
}
