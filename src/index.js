import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import './index.css';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const link = React.createElement("a", { href: "reactjs.org" }, "link");

const jsxLink = <a href="reactjs.org">link1</a>;

console.log(link);
console.log(jsxLink);

const painting = {
  id: "id-1",
  price: 500,
  author: "mike",
  quantity: 10,
};

const painting2 = {
  id: "id-2",
  price: 800,
  author: "kate",
  quantity: 20,
};

const template = (
  <div>
    <h2>author {painting.author}</h2>
    <p>price {painting.price}</p>
  </div>
);

console.log(template);
