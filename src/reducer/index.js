import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import products from "./products";
import cart from "./cart";
export default combineReducers({
  auth,
  products,
  message,
  cart,
});
