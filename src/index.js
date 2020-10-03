import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <div className="intro">
            <div className="w_size">
                <App/>
            </div>
        </div>
    </React.StrictMode>,
    document.getElementById("root"),
);
