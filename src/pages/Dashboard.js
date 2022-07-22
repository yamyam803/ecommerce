import React from "react";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import CompanyLogo from "../components/CompanyLogo";
import Feature from "../components/Feature";
import FeatureProducts from "../components/FeatureProducts";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Header />
      <Carousel />
      <Feature />
      <CompanyLogo />
      <FeatureProducts />
      <Categories />
    </React.Fragment>
  );
};

export default Dashboard;
