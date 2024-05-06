import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const theme = {
    colors: {
      bg: "#000000",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
