import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Todo from "./routes/Todo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about/:id" element={<About />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
