import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../assets/js/Button";

function HeroSection({ mydata }) {
  const { name } = mydata;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to</p>
            <h1>Clothique store</h1>
            <p>{name}</p>
            <NavLink>
              <Button>Shop now</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img
                src="src/assets/images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 10rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 23px;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgb(207 106 177 / 55%);
      position: absolute;
      left: 43%;
      top: -3rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 90%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .hero-section-image {
      order: -1;
    }

    figure::after {
      width: 50%;
      height: 100%;
      left: 50%;
      top: -14%;
      background-color: rgb(191 43 202 / 51%);
    }
  }
`;

export default HeroSection;
