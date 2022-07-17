import React from "react";
import Carousel from "./components/Carousel";
import CompanyLogo from "./components/CompanyLogo";
import Feature from "./components/Feature";
import Links from "./components/Links";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Links />
      <Carousel />
      <Feature />
      <CompanyLogo />
    </div>
  );
};

export default App;
