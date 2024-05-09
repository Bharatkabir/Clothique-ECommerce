import React from "react";
import styled from "styled-components";
function Contact() {
  return <Wrapper className="test">Contact</Wrapper>;
}

const Wrapper = styled.section`
  height: 100vh;
  // background-color: ${({ theme }) => theme.colors.bg};
`;

export default Contact;
