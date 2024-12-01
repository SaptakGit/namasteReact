import React from "react";
import ReactDOM from "react-dom/client"

const title = (<h1 id="heading" className="head" tabIndex="5">Namaste React React Element </h1>)

const Title2 = () => (<h1 id="heading" className="head" tabIndex="5">Namaste React React Component </h1>)

const HeadingComponent = () =>(
    <div id="container">
        {title}
        {Title2()}
        <Title2/>
        <Title2></Title2>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)