import React from "react";
import { Button } from "../assets/js/Button";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
function Error() {
  return (
    <Wrapper>
      <div className="text-center div">
        <h2>404</h2>
        <h2>UH OH! You're lost.</h2>
        <p>
          The page you are looking for does not exist. How you get here is a
          mystery. But you can click the button below to go back to homepage
        </p>
        <NavLink to="/">
          <Button>Go Back to Home</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .div {
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default Error;
