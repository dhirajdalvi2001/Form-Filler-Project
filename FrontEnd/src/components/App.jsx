import Header from "./Header";
import Body from "./Body";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Body />
      </BrowserRouter>
    </>
  );
}

export default App;
