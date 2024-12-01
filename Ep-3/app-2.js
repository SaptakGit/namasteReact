import React from "react";
import ReactDOM from "react-dom/client"

const heading = (<h1 id="heading" className="head" tabIndex="5">Namaste React React Element </h1>)

// React Component
/*const func1 = () => { return true };
const func2 = () =>true;

func1 and func2 is same and both are valid syntax */

/*const HeadingComponent = () =>{
    return <h1 className="heading">Namaste React Functional Component</h1>
}*/

const elem = <span>{heading} - React Element 2</span>

const Title = () =>(<h1 className="head" tabIndex="5">Namaste React Title </h1>)

const numbers = 1000 * 3;

const HeadingComponent = () =>(
    <div id="container">
        {elem}
        <Title/>
        <h2>{numbers}</h2>
        <h2>{console.log("Test 42")}</h2>
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)