import initModel from "./Model";
import update, { showFormMsg } from "./Update";
import view from "./View";
import app from "./App";
import "./main.css";

const node = document.getElementById("app");

app(initModel, update, view, node);
