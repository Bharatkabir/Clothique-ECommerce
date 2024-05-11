import React from "react";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Trusted from "./Trusted";
import FeatureProduct from "./FeatureProduct";
const Home = () => {
  const data = {
    name: `Explore fashion at its finest. Our curated collection embodies
    elegance, style, and quality. Discover chic essentials and
    statement pieces that define your unique style.`,
  };
  return (
    <>
      <HeroSection mydata={data} />;
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
