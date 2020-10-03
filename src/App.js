import React from "react";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Notice from "./components/Notice";
import "./App.css";

function App() {
    const boardInfo = {
        "zone": {
            "title": "글로벌 존 공지사항",
            "noti_url": "zone",
            "color": "#373a44"
        },
        "center": {
            "title": "글로벌 센터 공지사항",
            "noti_url": "center",
            "color": "#364969"
        }
    }
    return (
        <BrowserRouter>
            <Home/>
            <div className="btn_wrap">
                <Notice data={boardInfo.zone}/>
                <Notice data={boardInfo.center}/>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
