import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Feature from "../components/Feature";
import CompanyLogo from "../components/CompanyLogo";
import FeatureProducts from "../components/FeatureProducts";
import Categories from "../components/Categories";
import OurProducts from "../components/OurProducts";
import Testimonial from "../components/Testimonial";
import RecentlyAdd from "../components/RecentlyAdd";
import Footer from "../components/Footer";
import Checkout from "../components/Checkout";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Feature />
      <CompanyLogo />
      <FeatureProducts />
      <Categories />
      <OurProducts />
      <Testimonial />
      <RecentlyAdd />
      <Footer />
      {/* <Checkout /> */}
    </div>
  );
};

export default Home;
