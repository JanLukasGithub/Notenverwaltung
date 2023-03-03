import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/App";

const domTargetHauptfenster = document.querySelector("#react-app-hauptfenster");

ReactDOM.render(<App />, domTargetHauptfenster);