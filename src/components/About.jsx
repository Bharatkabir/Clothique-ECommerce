import React from "react";
import styled from "styled-components";
import HeroSection from "./HeroSection";

function About() {
  const data = {
    name: "Explore our story, where style meets quality. Discover fashion-forward collections and exceptional service. Join us on a journey of timeless elegance. Learn about our mission and commitment to customer satisfaction",
  };
  return (
    <>
      <HeroSection mydata={data} />;
    </>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  // background-color: ${({ theme }) => theme.colors.bg};
`;

export default About;
