import React from "react";
import ReactDOM from "react-dom/client"

// Using Core React
const heading = React.cloneElement(
    "h1",
    {id:"heading"},
    "Namaste React"
);

console.log(heading)

// Using JSX
const jsxheading = (<h1 id="heading" className="head" tabIndex="5">Namaste React using JSX </h1>)

console.log(jsxheading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading)