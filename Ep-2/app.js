import React from "react";
import ReactDOM from "react-dom/client"
const heading = React.createElement(
    "h1", // Tag name
    {id:"heading", name:"react_heading"},  // attributes
    "Hello World from React" // children/text/what we want to show. This can be one children or array of multiple children
);

const parent = React.createElement("div", {id:"parent"},
    [   React.createElement("div", {id:"child"},
            [React.createElement("h1", {},"this is namaste react"),
            React.createElement("h2", {},"I'm H2 Tag")]
        ),
        React.createElement("div", {id:"child2"},
            [React.createElement("h1", {},"I'm H1 Tag"),
            React.createElement("h2", {},"I'm H2 Tag")]
        )
    ]
);

console.log(heading) // is an object
console.log(parent) 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(parent);