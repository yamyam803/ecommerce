import React from "react";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import CompanyLogo from "../components/CompanyLogo";
import Feature from "../components/Feature";
import FeatureProducts from "../components/FeatureProducts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurProducts from "../components/OurProducts";
import RecentlyAdd from "../components/RecentlyAdd";
import Testimonial from "../components/Testimonial";

const Dashboard = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Dashboard;
