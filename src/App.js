import React from "react";
import "./style/App.css";
import Home from "./components/Home";
import Notice from "./components/Notice";
import Footer from "./components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Admin from "./components/Admin";

function App() {
  return (
    <BrowserRouter>
      <Route path="/admin" exact={true} component={Admin}></Route>
      <Home />
      <div className="btn_wrap">
        <Notice />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
