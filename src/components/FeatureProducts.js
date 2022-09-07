import React, { useEffect, useState } from "react";
import Products from "./Products";
import styles from "./FeatureProducts.module.css";
import RightArrow from "../assets/Right Arrow.png";
import LeftArrow from "../assets/Left Arrow.png";
import { connect,useDispatch,useSelector } from "react-redux";
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
// ​​
// rate: 4.1
// ​/* <prototype>: Object { … }
// ​​​
// title: "Mens Casual Premium Slim Fit T-Shirts " */

const FeatureProducts = (props) => {
  const dispatch = useDispatch();
  const [dataProduct, setDataProduct] = useState([]);
  const { products } = useSelector((state) => state.products);

  const mappingProduct =() =>{
    // const pItem = []
    // for (let i = 0; i < 5; i++) {
    //   pItem.push({
    //     name: products.data[i].title,
    //     price: products.data[i].price,
    //   })
    // }
    // setDataProduct(pItem);
  }
  useEffect(() => {
    const fd = async () => {
      try {
        await dispatch(fetchProduct());
      } catch (error) {
        console.log("error", error);
      }
    };

    if(!products){ fd();}
    },  [products]);

  useEffect(() => {    
    if(!dataProduct){
      mappingProduct()
    }            
  }, [products, dataProduct]);

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
        {products && products.data.map((item) => {
          const itemMap = {name: item.title, price: item.price}
          return <Products item={itemMap} key={Math.random().toString()} />;
        })}
      </div>
    </React.Fragment>
  );
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     _fetchProduct: () => fetchProduct(dispatch),
//   };
// };
// const mapStateToProps = (state) => {
//   const {products} = state;
//   console.log('state prod',state);
//   return products;
// };

export default FeatureProducts;
// export default connect(mapStateToProps, mapDispatchToProps)(FeatureProducts);
