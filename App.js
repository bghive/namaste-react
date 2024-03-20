import React from "react";
import  ReactDOM  from "react-dom/client";


const ele = <span>Another element</span>

// Title component
const title = (
    <h1 id="heading">
        {ele}
        From react element !!!
        </h1>
    );
    
// Component composition
const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1>Hi from Functional component!!!</h1>
    </div>
);



// const parent  = React.createElement(
//     "div",{id:"parent"},
//     [React.createElement("div",{id : "child1"},
//        [React.createElement("h1",{},"Hey "),
//         React.createElement("h6",{},"Hello am from child1 :h6")]
//     ),
//     React.createElement("div",{id : "child2"},
//        [React.createElement("h1",{},"Hello am from child2 :h1"),
//         React.createElement("h6",{},"Hello am from child2: h6")]
//     )]

// );

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React !!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);