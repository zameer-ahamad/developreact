import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// eslint-disable-next-line
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// eslint-disable-next-line
import Counters from "./components/counters";
import Main from "./routerComponents/main.jsx";

//import Tags from "./components/tagsComponent";

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
