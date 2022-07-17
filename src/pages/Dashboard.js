import React from "react";
import Carousel from "../components/Carousel";
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
    </React.Fragment>
  );
};

export default Dashboard;
