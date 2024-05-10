import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}


html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;

}

h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 3rem;
  font-weight: 800;
}

 h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


${"" /* resuable code section  */}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

/* Flex container styles with space-evenly */
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; /* Distribute items evenly along the main axis */
  gap: 9rem;
}

/* Two-column layout */
.grid-two-column > * {
  flex: 0 0 calc(51% - 26.5rem); 
}

/* Three-column layout */
.grid-three-column > * {
  flex: 1 1 calc(33.33% - 6rem); /* Adjust as needed based on gap */
  margin-bottom: 9rem;
}

/* Four-column layout */
.grid-four-column > * {
  flex: 1 1 calc(25% - 6rem); /* Adjust as needed based on gap */
  margin-bottom: 9rem;
}

/* Five-column layout */
.grid-five-column > * {
  flex: 1 1 calc(20% - 4.8rem); /* Adjust as needed based on gap */
  margin-bottom: 9rem;
}


  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
    }

   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
 color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }

input, textarea{
    max-width: 50rem  color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem; border: 1px solid ${({ theme }) =>
      theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 15rem;
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    border-radius:5%;
    }


.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }

`;
