import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
