import { FETCH_PRODUCTS_SUCCES, FETCH_PRODUCTS_FAIL } from "../actions/types";

const initialState = { cart: [] };

const cart = [];
// const Add = (data) => {
//   const item = cart.find((i) => i.id === data.id);
//   if (item) {
//     item.qty++;
//   } else {
//     cart.push({ ...data, qty: 1 });
//   }
// };

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case "ADD_PRODUCT":
      const item = state.cart.find((i) => i.id === payload.id);
      if (item) {
        item.qty++;
      } else {
        state.cart.push({ ...payload, qty: 1 });
      }
      return {
        ...state,
      };
    default:
      return state;
  }
}
