import React, { useEffect } from "react";
import Products from "./Products";
import styles from "./FeatureProducts.module.css";
import RightArrow from "../assets/Right Arrow.png";
import LeftArrow from "../assets/Left Arrow.png";
// import { products } from "../services/product";
import { connect } from "react-redux";
import { fetchProduct } from "../actions/products";
const data = [];

// category: "men's clothing"
// ​​​
// description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
// ​​​
// id: 2
// ​​​
// image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
// ​​​
// price: 22.3
// ​​​
// rating: Object { rate: 4.1, count: 259 }
// ​​​​
// count: 259
// ​​​​
// rate: 4.1
// ​/* <prototype>: Object { … }
// ​​​
// title: "Mens Casual Premium Slim Fit T-Shirts " */

const FeatureProducts = (props) => {
  useEffect(() => {
    props.fetchProduct();
  }, []);
  console.log(props.products);
  for (let i = 0; i <= 5; i++) {
    data.push({
      name: props.products[i].title,
      price: props.products[i].price,
    });
  }
  // const data2 = async () => {
  //   const resp = await products;
  //   const data = await resp.json();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   data2();
  // }, []);
  return (
    <React.Fragment>
      <div className={styles["feature-heading"]}>
        <h3 className={styles["feature-title"]}>Featured Products</h3>
        <div className={styles["feature-button"]}>
          <button className={styles.left}>
            <img src={LeftArrow} alt="left arrow" />
          </button>
          <button className={styles.right}>
            <img src={RightArrow} alt="right arrow" />
          </button>
        </div>
      </div>
      <div className={styles.container}>
        {data.map((item) => {
          return <Products item={item} key={Math.random().toString()} />;
        })}
      </div>
    </React.Fragment>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    fetchProduct: () => dispatch(fetchProduct()),
    // decrement: () => dispatch(kurang()),
  };
};
const mapStateToProps = (state) => {
  // return { number: state.number };
  // console.log(state.products);
  return { products: state.products };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeatureProducts);
// export default FeatureProducts;
