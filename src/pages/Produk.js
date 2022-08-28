import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
// import { connect } from "react-redux";
// import { fetchProduct } from "../actions/products";
const Produk = () => {
  return (
    <div>
      <Header />
      <ProductDetail />

      <Footer />
    </div>
  );
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     // dispatching plain actions
//     fetchProduct: () => dispatch(fetchProduct()),
//     // decrement: () => dispatch(kurang()),
//   };
// };
// const mapStateToProps = (state) => {
//   // return { number: state.number };
//   console.log(state);
// };
// export default connect()(Produk);
export default Produk;
