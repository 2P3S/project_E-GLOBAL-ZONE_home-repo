import React from "react";
import "./App.css";
import Home from "./components/Home";
import Notice from "./components/Notice";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <div className="btn_wrap">
        <Notice />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
