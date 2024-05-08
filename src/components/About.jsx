import React from "react";
import styled from "styled-components";
function About() {
  return <Wrapper className="test">Home</Wrapper>;
}

const Wrapper = styled.section`
  height: 100vh;
  // background-color: ${({ theme }) => theme.colors.bg};
`;

export default About;
