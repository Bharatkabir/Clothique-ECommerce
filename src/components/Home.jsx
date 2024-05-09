import React from "react";
import HeroSection from "./HeroSection";

const Home = () => {
  const data = {
    name: `Explore fashion at its finest. Our curated collection embodies
    elegance, style, and quality. Discover chic essentials and
    statement pieces that define your unique style.`,
  };
  return <HeroSection mydata={data} />;
};

export default Home;
