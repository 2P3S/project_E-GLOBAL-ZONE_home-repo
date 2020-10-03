import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Home/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
